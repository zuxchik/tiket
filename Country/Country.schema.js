const { Schema, model } = require("mongoose");

const CountrySchema = new Schema({
    country: { type: String, require: true }
});

const countrychik = model("country", CountrySchema);

module.exports = { countrychik };
