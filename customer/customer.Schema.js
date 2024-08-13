const { Schema, model } = require("mongoose");
const { Gender } = require("../gender/gender.Schema");
const { language } = require("../lenguage/lenguage.Schema");

const customerSchema = new Schema({
  first_name: { type: String }, 
  last_name: { type: String }, 
  phone: { type: String }, 
  hashed_password: { type: String }, 
  birth_date: { type: Date }, 
  email: { type: String, require: true } ,
  gender: { type:Schema.Types.ObjectId, ref: Gender } ,
  lang_id: { type: Schema.Types.ObjectId, ref: language } ,
});

const Customer = model("customer", customerSchema);

module.exports = { Customer };
