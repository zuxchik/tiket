const { Schema, model } = require("mongoose");
const { Venue } = require("../venue/venue.Schema");

const venuePhotoSchema = new Schema({
  venue_id: { type: Schema.Types.ObjectId, ref: Venue },
  url: { type: String, require: true }
});

const VenuePhotos = model("venuePhoto", venuePhotoSchema);

module.exports = { VenuePhotos };
