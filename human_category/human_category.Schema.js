const { Schema, model } = require("mongoose");
const { Gender } = require("../gender/gender.Schema");


const humanCategorySchema = new Schema({
  name: { type: String, require: true },
  start_age: { type: Number, require: true },
  finish_age: { type: Number, require: true },
  gender_id: { type: Schema.Types.ObjectId, ref: Gender }
});

const HumanCategory = model('humanCategory', humanCategorySchema);
module.exports = { HumanCategory };
