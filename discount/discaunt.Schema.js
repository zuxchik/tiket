const { Schema, model } = require("mongoose");

const discauntSchema = new Schema({
    finish_data: { type: Date, require: true },
    discaunt: {type: String, require: true}
});

const Discaunt = model("discaunt", discauntSchema);

module.exports = { Discaunt };
