const { Schema, model } = require("mongoose");
const { Customer } = require("../customer/customer.Schema")


const customerCardSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: Customer },
  name: { type: String, require: true },
  phone: { type: String, require: true },
  number: { type: String, require: true },
  year: { type: String, require: true },
  month: { type: String, require: true },
  is_active: { type: Boolean, require: true },
  is_main: { type: Boolean, require: true }
});

const CustomerCard = model("CustomerCard", customerCardSchema);

module.exports = { CustomerCard };
