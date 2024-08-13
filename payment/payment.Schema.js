const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
    name: { type: String, require: true }
});


const Payment = model("payment", PaymentSchema);
module.exports = { Payment };
