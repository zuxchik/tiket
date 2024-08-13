const { Schema, model } = require("mongoose");
const { VenueType } = require("../venue_type/venue_type.Schema");
const {  Region } = require("../Region/region.Schema");
const { District } = require("../discrict/discrict.Schema");


const venueSchema = new Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  location: { type: String, require: true },
  site: { type: String, require: false },
  phone: { type: String, require: false },
  venue_type_id: { type: Schema.Types.ObjectId, ref: VenueType },
  schema: { type: String, require: false },
  region_id: { type: Schema.Types.ObjectId, ref: Region },
  district_id: { type: Schema.Types.ObjectId, ref: District },
});

const VenueBek = model("Venue", venueSchema);

module.exports = { VenueBek };
