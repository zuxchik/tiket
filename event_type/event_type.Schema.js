  const { Schema, model } = require("mongoose");

const event_typeSchema = new Schema({
  name: { type: String, require: true },
});

const event_typeChik = model("event_typeChik", event_typeSchema);

module.exports = { event_typeChik };
