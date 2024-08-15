const { Schema, model } = require("mongoose");
const { SeatType } = require("../seat_type/seat_type.Schema")
const { VenueBek } = require("../venue/venue.Schema");
const { SectorChik } = require("../Sector/Sector.Schema");

const seatSchema = new Schema({
    sector_id: { type: Schema.Types.ObjectId, ref: SectorChik },
    row_number: { type: Number, require: true },
    number: { type: String, require: true },
    venue_id: { type: Schema.Types.ObjectId, ref: VenueBek },
    seat_type_id: { type: Schema.Types.ObjectId, ref: SeatType },
});

const SeatBek = model("Seat", seatSchema);

module.exports = { SeatBek };
