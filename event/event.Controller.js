const { Event } = require("./event.Schema");

const createEvent = async (req, res) => {
  try {
    const {
      id,
      name,
      photo,
      start_date,
      start_time,
      finish_date,
      finish_time,
      info,
      event_type_id,
      human_category_id,
      venue_id,
      lang_id,
      release_date
    } = req.body;

    const newEvent = new Event({
      id,
      name,
      photo,
      start_date,
      start_time,
      finish_date,
      finish_time,
      info,
      event_type_id,
      human_category_id,
      venue_id,
      lang_id,
      release_date
    });

    await newEvent.save();
    res.status(201).send(newEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate("event_type_id human_category_id venue_id lang_id");
    if (!event) {
      return res.status(404).send("Event not found");
    }
    res.send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updatedData = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedData, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    res.json({
      success: true,
      message: "Event updated successfully.",
      event: updatedEvent,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Error updating event.",
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
};
