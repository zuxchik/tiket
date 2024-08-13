const { Schema, model } = require("mongoose")

const StatusSchema = new Schema({
    status: { type: String, require: true }
})

const Status = model("status", StatusSchema)
module.exports = { Status }