const { Schema, model } = require("mongoose");

const sectorSchema = new Schema({
  sector_name: { type: String, require: true },
});

const SectorChik = model("sector", sectorSchema);

module.exports = { SectorChik };
 