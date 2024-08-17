const mongoose = require("mongoose");
const { Seat } = require("../seat/seat.Schema");
const { Status } = require("../status/status.Schema");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  event_id: { type: Schema.Types.ObjectId, ref:  Event },
  seat_id: { type: Schema.Types.ObjectId, ref: Seat },
  price: { type: Number, require: true },
  service_fee: { type: Number, require: true },
  status_id: { type: Schema.Types.ObjectId, ref: Status },
  ticket_type: { type: Number, require: true }
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = { Ticket };
