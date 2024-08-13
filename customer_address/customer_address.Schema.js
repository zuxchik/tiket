const { Schema, model } = require("mongoose");
const { Customer } = require("../customer/customer.Schema")
const { Region } = require("../Region/region.Schema");
const { District } = require("../discrict/discrict.Schema");
const { countrychik } = require("../Country/Country.schema");

const customerAddressSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: Customer },
  name: { type: String, require: true },
  country_id: { type: Schema.Types.ObjectId, ref: countrychik },
  region_id: { type: Schema.Types.ObjectId, ref: Region },
  district_id: { type: Schema.Types.ObjectId, ref: District },
  street: { type: String, require: true },
  house: { type: String, require: true },
  flat: { type: String, require: true },
  location: { type: String, require: true },
  post_index: { type: String, require: true },
  info: { type: String, require: true }
});

const CustomerAddress = model("customerAddress", customerAddressSchema);
module.exports = { CustomerAddress };
