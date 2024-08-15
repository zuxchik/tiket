  const { Schema, model } = require("mongoose");

const event_typeSchema = new Schema({
  name: { type: String, require: true },
});

const Event_typeChik = model("event_typeChik", event_typeSchema);

module.exports = { Event_typeChik };
