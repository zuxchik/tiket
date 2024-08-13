const { Schema, model } = require("mongoose");

const FlatSchema = new Schema({
  etaj: { type: Number, require: true }, 
  condition: { type: String, require: true }
});

const Flat = model("flat", FlatSchema);

module.exports = { Flat };
