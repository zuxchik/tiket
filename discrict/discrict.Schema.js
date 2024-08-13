const { Schema, model } = require("mongoose")
const { Region } = require("../Region/region.Schema")

const DistrictSchema = new Schema({
    name: { type: String, require: true },
    region: { type: Schema.Types.ObjectId, ref: Region }
})

const District = model("Status", DistrictSchema)
module.exports = { District }