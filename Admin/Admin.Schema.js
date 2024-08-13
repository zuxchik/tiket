const { Schema, model } = require("mongoose");

const AdminChikSchema = new Schema({
  name: { type: String, require: true },
  login: { type: String, require: true },
  hashed_password: { type: String, require: true },
  is_active: { type: Boolean, require: true },
  is_creator: { type: Boolean }
});

const AdminChik = model("Admin", AdminChikSchema);

module.exports = { AdminChik };