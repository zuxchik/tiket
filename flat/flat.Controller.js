const { Flat } = require("./flat.Schema");

const create_Flat = async (req, res) => {
    try {
        const {
            etaj,
            condition
        } = req.body;

        const new_Flat = new Flat({
            etaj,
            condition
        });

        await new_Flat.save();
        res.status(201).send(new_Flat);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getFlat = async (req, res) => {
    try {
        const Flats = await Flat.find();
        res.send(Flats);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getFlatById = async (req, res) => {
    try {
        const { Flatid } = req.params;
        const Flat = await Flat.findById(Flatid);
        if (!Flat) {
            return res.status(404).send("Flat not found");
        }
        res.send(Flat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateFlat = async (req, res) => {
    try {
        const FlatId = req.params.id;
        const updatedData = req.body;

        const updatedFlat = await Flat.findByIdAndUpdate(FlatId, updatedData, {
            new: true,
        });

        if (!updatedFlat) {
            return res.status(404).json({
                success: false,
                message: "Flat topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Flat ma'lumotlari yangilandi.",
            FlatChik: updatedFlat,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Flati yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_Flat,
    getFlat,
    getFlatById,
    updateFlat,
};