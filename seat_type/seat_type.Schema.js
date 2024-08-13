const { Schema, model } = require("mongoose");

const seatTypeSchema = new Schema({
  name: { type: String, require: true }
});

const SeatType = model("seatType", seatTypeSchema);

module.exports = { SeatType };
