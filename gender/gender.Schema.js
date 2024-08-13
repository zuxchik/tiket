const { Schema, model } = require("mongoose");

const GenderSchema = new Schema({
  name: { type: String }
});

const Gender = model("gender", GenderSchema);

module.exports = { Gender };
