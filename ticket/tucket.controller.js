const { Ticket } = require("./ticket.Schema");

const create_TiketCheks = async (req, res) => {
    try {
        const {
            event_id,
            seat_id,
            status_id,
            price,
            service_fee,
            ticket_type
        } = req.body;

        const new_TiketCheks = new Ticket({
            event_id,
            seat_id,
            status_id,
            price,
            service_fee,
            ticket_type
        });

        await new_TiketCheks.save();
        res.status(201).send(new_TiketCheks);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTiketCheks = async (req, res) => {
    try {
        const TiketChekss = await Ticket.find().populate("event_id seat_id status_id");
        res.send(TiketChekss);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getTiketCheksById = async (req, res) => {
    try {
        const { id } = req.params;
        const TiketCheks = await Ticket.findById(id);
        if (!TiketCheks) {
            return res.status(404).send("TiketCheks not found");
        }
        res.send(TiketCheks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateTiketCheks = async (req, res) => {
    try {
        const TiketCheksId = req.params.id;
        const updatedData = req.body;

        const updatedTiketCheks = await Ticket.findByIdAndUpdate(TiketCheksId, updatedData, {
            new: true,
        }).populate("event_id seat_id status_id");

        if (!updatedTiketCheks) {
            return res.status(404).json({
                success: false,
                message: "TiketCheks topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "TiketCheks ma'lumotlari yangilandi.",
            TiketCheksChik: updatedTiketCheks,
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
    create_TiketCheks,
    getTiketCheks,
    getTiketCheksById,
    updateTiketCheks,
};