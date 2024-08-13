const { Schema, model } = require("mongoose");
const { Ticket } = require("../ticket/ticket.Schema");
const { Customer } = require("../customer/customer.Schema");
const { Status } = require("../status/status.Schema");

const cartSchema = new Schema({
  ticket_id: { type: Schema.Types.ObjectId, ref: Ticket }, 
  customer_id: { type: Schema.Types.ObjectId, ref: Customer }, 
  createdAt: { type: Date, require: true }, 
  finishedAt: { type: Date, require: true }, 
  status_id: { type: Schema.Types.ObjectId, ref: Status } 
});

const Cart = model("cart", cartSchema);

module.exports = { Cart };
