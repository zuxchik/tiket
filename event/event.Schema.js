const { Schema, model } = require("mongoose");
const { event_typeChik } = require("../event_type/event_type.Schema");
const { HumanCategory } = require("../human_category/human_category.Schema");
const { VenueBek } = require("../venue/venue.Schema")

const eventSchema = new Schema({
  name: { type: String, require: true },
  photo: { type: String, require: true },
  start_date: { type: Date, require: true },
  start_time: { type: Date, require: true },
  finish_date: { type: Date, require: true },
  finish_time: { type: Date, require: true },
  info: { type: String, require: true },
  event_type_id: { type: Schema.Types.ObjectId, ref: event_typeChik },
  human_category_id: { type: Schema.Types.ObjectId, ref: HumanCategory },
  venue_id: { type: Schema.Types.ObjectId, ref: VenueBek },
  // lang_id: { type: Number, require: true },
  release_date: { type: Date, require: true }
});

const Event = model("event", eventSchema);

module.exports = { Event };
