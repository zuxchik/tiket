const { Schema, model } = require("mongoose");
const { Cart } = require("../cart/cart.Schema");
const { Status } = require("../status/status.Schema");
const { Delivery } = require("../delivery/delivery.Schema");
const { Payment } = require("../payment/payment.Schema")
const { Discaunt } = require("../discount/discaunt.Schema");

const bookingSchema = new Schema({
  cart_id: { type: Schema.Types.ObjectId, ref: Cart },
  createdAt: { type: Date, require: true },
  finished: { type: String, require: false },
  payment_method_id: { type: Schema.Types.ObjectId, ref: Payment },
  delivery_method_id: { type: Schema.Types.ObjectId, ref: Delivery },
  discount_coupon_id: { type: Schema.Types.ObjectId, ref: Discaunt },
  status_id: { type: Schema.Types.ObjectId, ref: Status }
});

const Booking = model("booking", bookingSchema);

module.exports = { Booking };
