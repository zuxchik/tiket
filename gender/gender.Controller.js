const { Gender } = require("./gender.Schema")

const createGender = async (req, res) => {
    try {
        const {
            name
        } = req.body;

        const newgender = new Gender({
            name
        });

        await newgender.save();
        res.status(201).send(newgender);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getGenders = async (req, res) => {
    try {
        const genders = await Gender.find()
        res.send(genders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getGenderById = async (req, res) => {
    try {
        const gendersId = req.params.id;
        const genders = await Gender.findById(gendersId);
        if (genders) {
            res.json({ message: "genders topildi", genders });
        }
    } catch (error) {
        console.error("Xato", error);
        res.json({ message: "Xatolik yuz berdi" });
    }
};

const updateGender = async (req, res) => {
    try {
        const genderId = req.params.id;
        const updatedData = req.body;

        const updatedgender = await Gender.findByIdAndUpdate(genderId, updatedData, {
            new: true,
        });

        if (!updatedgender) {
            return res.status(404).json({
                success: false,
                message: "gender topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "gender ma'lumotlari yangilandi.",
            genders: updatedgender,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: genderni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    createGender,
    getGenders,
    getGenderById,
    updateGender
};
