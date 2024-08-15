const { Schema, model } = require("mongoose");

const CountrySchema = new Schema({
    country: { type: String, require: true }
});

const Country = model("country", CountrySchema);

module.exports = { Country };
