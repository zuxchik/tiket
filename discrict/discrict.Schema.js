const { Schema, model } = require("mongoose")
const { Region } = require("../Region/region.Schema")

const DistrictSchema = new Schema({
    name: { type: String, require: true },
    region_id: { type: Schema.Types.ObjectId, ref: Region }
})

const District = model("district", DistrictSchema)
module.exports = { District }