const { Schema, model } = require("mongoose");
const { Ticket } = require("../ticket/ticket.Schema");

const TicketTypeSchema = new Schema({
  color: { type: String, require: true },
  name: { type: String, require: true },
  ticket_id: { type: Schema.Types.ObjectId, ref: Ticket },
});

const TicketTypechik = model("ticket_type", TicketTypeSchema);

module.exports = { TicketTypechik };
 