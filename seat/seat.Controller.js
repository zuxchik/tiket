const { Seat } = require("./seat.Schema");

const create_Seat = async (req, res) => {
    try {
        const {
            sector_id,
            row_number,
            number,
            venue_id,
            seat_type_id
        } = req.body;

        const new_Seat = new Seat({
            sector_id,
            row_number,
            number,
            venue_id,
            seat_type_id
        });

        await new_Seat.save(); 
        res.status(201).send(new_Seat);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSeat = async (req, res) => {
    try {
        const Seats = await Seat.find().populate("sector_id venue_id seat_type_id");
        res.send(Seats);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSeatById = async (req, res) => {
    try {
        const Seatsid = req.params;
        const Seats = await Seat.findById(Seatsid).populate("sector_id venue_id seat_type_id");
        if (!Seats) {
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

        const updatedSeat = await Seat.findByIdAndUpdate(SeatId, updatedData, {
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