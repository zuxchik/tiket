const { VenueBek } = require("./venue.Schema");

const create_Venue = async (req, res) => {
    try {
        const {
            name,
            address,
            location,
            site,
            phone,
            venue_type_id,
            schema
        } = req.body;

        const new_Venue = new VenueBek({
            name,
            address,
            location,
            site,
            phone,
            venue_type_id,
            schema
        });

        await new_Venue.save();
        res.status(201).send(new_Venue);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getVenue = async (req, res) => {
    try {
        const Venues = await VenueBek.find();
        res.send(Venues);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getVenueById = async (req, res) => {
    try {
        const { id } = req.params;
        const Venue = await VenueBek.findById(id);
        if (!Venue) {
            return res.status(404).send("Venue not found");
        }
        res.send(Venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateVenue = async (req, res) => {
    try {
        const VenueId = req.params.id;
        const updatedData = req.body;

        const updatedVenue = await VenueBek.findByIdAndUpdate(VenueId, updatedData, {
            new: true,
        });

        if (!updatedVenue) {
            return res.status(404).json({
                success: false,
                message: "Venue topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Venue ma'lumotlari yangilandi.",
            VenueChik: updatedVenue,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: SeatTypofi yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_Venue,
    getVenue,
    getVenueById,
    updateVenue,
};