const { SeatBek } = require("./seat.Schema");

const create_Seat = async (req, res) => {
    try {
        const {
            name,
            start_age,
            finish_age,
            gender
        } = req.body;

        const new_Seat = new SeatBek({
            name,
            start_age,
            finish_age,
            gender
        });

        await new_Seat.save();
        res.status(201).send(new_Seat);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSeat = async (req, res) => {
    try {
        const Seats = await SeatBek.find();
        res.send(Seats);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSeatById = async (req, res) => {
    try {
        const { id } = req.params;
        const Seat = await SeatBek.findById(id);
        if (!Seat) {
            return res.status(404).send("Seat not found");
        }
        res.send(Seat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateSeat = async (req, res) => {
    try {
        const SeatId = req.params.id;
        const updatedData = req.body;

        const updatedSeat = await SeatBek.findByIdAndUpdate(SeatId, updatedData, {
            new: true,
        });

        if (!updatedSeat) {
            return res.status(404).json({
                success: false,
                message: "Seat topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Seat ma'lumotlari yangilandi.",
            SeatChik: updatedSeat,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Seati yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_Seat,
    getSeat,
    getSeatById,
    updateSeat,
};