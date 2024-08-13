const { Schema, model } = require("mongoose");

const deliverySchema = new Schema({
    name: { type: String, require: true }
});

const Delivery = model("delivery", deliverySchema);

module.exports = { Delivery };
