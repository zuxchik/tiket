const { Delivery } = require("./delivery.Schema")

const createDelivery = async (req, res) => {
    try {
        const {
            name
        } = req.body;

        const newDelivery = new Delivery({
            name
        });

        await newDelivery.save();
        res.status(201).send(newDelivery);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getDelivery = async (req, res) => {
    try {
        const Deliverys = await Delivery.find()
        res.send(Deliverys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getDeliveryById = async (req, res) => {
    try {
        const DeliverysId = req.params.id;
        const Deliverys = await Delivery.findById(DeliverysId);
        if (Deliverys) {
            res.json({ message: "Deliverys topildi", Deliverys });
        }
    } catch (error) {
        console.error("Xato", error);
        res.json({ message: "Xatolik yuz berdi" });
    }
};

const updateDelivery = async (req, res) => {
    try {
        const DeliveryId = req.params.id;
        const updatedData = req.body;

        const updatedDelivery = await Delivery.findByIdAndUpdate(DeliveryId, updatedData, {
            new: true,
        });

        if (!updatedDelivery) {
            return res.status(404).json({
                success: false,
                message: "Delivery topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Delivery ma'lumotlari yangilandi.",
            Deliverys: updatedDelivery,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Deliveryni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    createDelivery,
    getDelivery,
    getDeliveryById,
    updateDelivery
};
