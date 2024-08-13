const { Status } = require("./status.Schema");

const createStatus = async (req, res) => {
    try {
        const {
            status
        } = req.body;
        const newStatus = new Status({
            status
        });

        await newStatus.save();
        res.status(201).send(newStatus);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getStatus = async (req, res) => {
    try {
        const Statuss = await Status.find();
        res.send(Statuss);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getStatusById = async (req, res) => {
    try {
        const { id } = req.params;
        const Status = await Status.findById(id);
        if (!Status) {
            return res.status(404).send("Status not found");
        }
        res.send(Status);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateStatus = async (req, res) => {
    try {
        const StatusId = req.params.id;
        const updatedData = req.body;

        const updatedStatus = await Status.findByIdAndUpdate(StatusId, updatedData, {
            new: true,
        });

        if (!updatedStatus) {
            return res.status(404).json({
                success: false,
                message: "Status topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Status ma'lumotlari yangilandi.",
            StatussChik: updatedStatus,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Statusi yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    createStatus,
    getStatus,
    getStatusById,
    updateStatus,
};