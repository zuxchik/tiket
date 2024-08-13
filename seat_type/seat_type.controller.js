const { ZeatTypoF } = require("./seat_type.Schema");

const create_SeatTypof = async (req, res) => {
    try {
        const {
            name
        } = req.body;

        const new_SeatTypof = new ZeatTypoF({
            name
        });

        await new_SeatTypof.save();
        res.status(201).send(new_SeatTypof);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSeatTypof = async (req, res) => {
    try {
        const SeatTypofs = await ZeatTypoF.find();
        res.send(SeatTypofs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSeatTypofById = async (req, res) => {
    try {
        const { id } = req.params;
        const SeatTypof = await ZeatTypoF.findById(id);
        if (!SeatTypof) {
            return res.status(404).send("SeatTypof not found");
        }
        res.send(SeatTypof);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateSeatTypof = async (req, res) => {
    try {
        const SeatTypofId = req.params.id;
        const updatedData = req.body;

        const updatedSeatTypof = await ZeatTypoF.findByIdAndUpdate(SeatTypofId, updatedData, {
            new: true,
        });

        if (!updatedSeatTypof) {
            return res.status(404).json({
                success: false,
                message: "SeatTypof topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "SeatTypof ma'lumotlari yangilandi.",
            SeatTypofChik: updatedSeatTypof,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: SeatTypofi yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_SeatTypof,
    getSeatTypof,
    getSeatTypofById,
    updateSeatTypof,
};