const { Discaunt } = require("./discaunt.Schema")

const createDiscaunt = async (req, res) => {
    try {
        const {
            finish_data,
            discaunt
        } = req.body;

        const newDiscaunt = new Discaunt({
            finish_data,
            discaunt
        });

        await newDiscaunt.save();
        res.status(201).send(newDiscaunt);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getDiscaunt = async (req, res) => {
    try {
        const Discaunts = await Discaunt.find()
        res.send(Discaunts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getDiscauntById = async (req, res) => {
    try {
        const DiscauntId = req.params.id;
        const Discaunts = await Discaunt.findById(DiscauntId);
        if (Discaunts) {
            res.json({ message: "Discaunt topildi", Discaunts });
        }
    } catch (error) {
        console.error("Xato", error);
        res.json({ message: "Xatolik yuz berdi" });
    }
};

const updateDiscaunt = async (req, res) => {
    try {
        const DiscauntId = req.params.id;
        const updatedData = req.body;

        const updatedDiscaunt = await Discaunt.findByIdAndUpdate(DiscauntId, updatedData, {
            new: true,
        });

        if (!updatedDiscaunt) {
            return res.status(404).json({
                success: false,
                message: "Discaunt topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Discaunt ma'lumotlari yangilandi.",
            DiscauntChik: updatedDiscaunt,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Discauntni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    createDiscaunt,
    getDiscaunt,
    getDiscauntById,
    updateDiscaunt
};
