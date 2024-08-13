const { Schema, model } = require("mongoose");

const venueTypeSchema = new Schema({
  name: { type: String, require: true },
});

const VenueType = model("venueType", venueTypeSchema);

module.exports = { VenueType };
