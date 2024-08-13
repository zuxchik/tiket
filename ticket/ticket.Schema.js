const mongoose = require("mongoose");
const { SeatBek } = require("../seat/seat.Schema");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  event_id: { type: Schema.Types.ObjectId, ref:  Event },
  seat_id: { type: Schema.Types.ObjectId, ref: SeatBek },
  price: { type: Number, require: true },
  service_fee: { type: Number, require: true },
  status_id: { type: Number, require: true },
  ticket_type: { type: Number, require: true }
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = { Ticket };
