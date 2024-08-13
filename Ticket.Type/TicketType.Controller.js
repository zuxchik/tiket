const { TicketTypeChik } = require("./TicketType.Schema");

const create_Ticket_Chik = async (req, res) => {
    try {
        const { color, name, ticket_id } = req.body;

        const new_Ticket_Chik = new TicketTypeChik({ color, name, ticket_id });

        await new_Ticket_Chik.save();
        res.status(201).send(new_Ticket_Chik);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTicket_Chik = async (req, res) => {
    try {
        const Ticket_Chiks = await TicketTypeChik.find({}).populate("ticket_id");
        res.json({ message: "Event typelar ro'yhati", Ticket_Chiks });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getTicket_ChikById = async (req, res) => {
    try {
        const { id } = req.params;
        const Ticket_Chik = await TicketTypeChik.findById(id).populate("ticket_id");
        if (!Ticket_Chik) {
            return res.status(404).send("TicketType not found");
        }
        res.json({ message: "Event type topildi", Ticket_Chik });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateTicket_Chik = async (req, res) => {
    try {
        const Ticket_ChikId = req.params.id;
        const updatedData = req.body;
        const updatedTicket_Chik = await TicketTypeChik.findByIdAndUpdate(Ticket_ChikId, updatedData, { new: true });

        if (!updatedTicket_Chik) {
            return res.status(404).json({ success: false, message: "TicketType topilmadi." });
        }

        res.json({ success: true, message: "TicketType ma'lumotlari yangilandi.", TicketTypeChik: updatedTicket_Chik });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi: TicketType yangilashda xato yuz berdi." });
    }
};

module.exports = {
    create_Ticket_Chik,
    getTicket_Chik,
    getTicket_ChikById,
    updateTicket_Chik,
};
