const { Gender } = require("./gender.Schema");

const createGender = async (req, res) => {
    try {
        const {
            name
        } = req.body;

        const newGender = new Gender({
            name
        });

        await newGender.save();
        res.status(201).send(newGender);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getGenders = async (req, res) => {
    try {
        const genders = await Gender.find();
        res.send(genders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const mongoose = require("mongoose");

const getGenderById = async (req, res) => {
  try {
    const genderId = req.params.id;
    
    // Check if genderId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const gender = await Gender.findById(genderId);
    if (gender) {
      res.json({ message: "Gender topildi", gender });
    } else {
      res.status(404).json({ message: "Gender topilmadi" });
    }
  } catch (error) {
    console.error("Xato", error);
    res.status(500).json({ message: "Xatolik yuz berdi" });
  }
};


const updateGender = async (req, res) => {
    try {
        const genderId = req.params.id;
        const updatedData = req.body;

        const updatedGender = await Gender.findByIdAndUpdate(
            genderId,
            updatedData,
            {
                new: true,
            }
        );

        if (!updatedGender) {
            return res.status(404).json({
                success: false,
                message: "Gender topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Gender ma'lumotlari yangilandi.",
            gender: updatedGender,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Genderni yangilashda xato yuz berdi.",
        });
    }
};

const deleteGender = async (req, res) => {
    try {
        const genderId = req.params.id;

        const deletedGender = await Gender.findByIdAndDelete(genderId);

        if (!deletedGender) {
            return res.status(404).json({
                success: false,
                message: "Gender topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Gender o'chirildi.",
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Genderni o'chirishda xato yuz berdi.",
        });
    }
};

module.exports = {
    createGender,
    getGenders,
    getGenderById,
    updateGender,
    deleteGender,
};