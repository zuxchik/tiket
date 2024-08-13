const { Schema, model } = require("mongoose");

const languageSchema = new Schema({
  language: { type: String, require: true },
  discription: { type: String, require: true }
});

const language = model("language", languageSchema);

module.exports = { language };
