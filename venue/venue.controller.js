const { Venue } = require("./venue.Schema")

const create_Venue = async (req, res) => {
    try {
        const {
            name,
            address,
            location,
            site,
            phone,
            venue_type_id,
            schema,
            region_id,
            district_id
        } = req.body;

        const newvenue = new Venue({
            name,
            address,
            location,
            site,
            phone,
            schema,
            venue_type_id,
            region_id,
            district_id
        });

        await newvenue.save();
        res.status(201).send(newvenue);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getVenue = async (req, res) => {
    try {
        const venues = await Venue.find().populate("region_id district_id venue_type_id");
        res.send(venues);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getVenueById = async (req, res) => {
    try {
        const venuesId = req.params.id;
        const venues = await Venue.findById(venuesId).polygon("venue_type_id region_id district_id");
        if (venues) {
            res.json({ message: "venues topildi", venues });
        }
    } catch (error) {
        console.error("Xato", error);
        res.json({ message: "Xatolik yuz berdi" });
    }
};

const updateVenue = async (req, res) => {
    try {
        const venueId = req.params.id;
        const updatedData = req.body;

        const updatedvenue = await Venue.findByIdAndUpdate(venueId, updatedData, {
            new: true,
        });

        if (!updatedvenue) {
            return res.status(404).json({
                success: false,
                message: "venue topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "venue ma'lumotlari yangilandi.",
            venues: updatedvenue,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: venueni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_Venue,
    getVenue,
    getVenueById,
    updateVenue
};
