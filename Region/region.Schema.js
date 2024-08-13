const { Schema, model } = require("mongoose")

const regionSchema = new Schema({
    name: { type: String, require: true },
    postpone: { type: Number }
})

const Region = model("region", regionSchema)
module.exports = { Region }