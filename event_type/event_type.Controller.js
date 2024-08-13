const { event_typeChik } = require("./event_type.Schema");

const createEventType = async (req, res) => {
    try {
        const { name } = req.body;

        const newEventType = new event_typeChik({ name });

        await newEventType.save();
        res.status(201).json({
            success: true,
            message: "Event type created successfully",
            data: newEventType
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

const getEventTypes = async (req, res) => {
    try {
        const eventTypes = await event_typeChik.find({});
        res.status(200).json({
            success: true,
            message: "Event types retrieved successfully",
            data: eventTypes
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const getEventTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const eventType = await event_typeChik.findById(id);
        if (!eventType) {
            return res.status(404).json({
                success: false,
                message: "Event type not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Event type retrieved successfully",
            data: eventType
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateEventType = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedEventType = await event_typeChik.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedEventType) {
            return res.status(404).json({
                success: false,
                message: "Event type not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Event type updated successfully",
            data: updatedEventType
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error: Could not update event type",
        });
    }
};

module.exports = {
    createEventType,
    getEventTypes,
    getEventTypeById,
    updateEventType,
};
