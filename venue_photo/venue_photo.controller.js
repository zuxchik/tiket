const { VenuePhotos } = require("./venue_photo.Schema");

const create_VenuePhoto = async (req, res) => {
    try {
        const {
            venue_id,
            url
        } = req.body;

        const new_VenuePhoto = new VenuePhotos({
            venue_id,
            url
        });

        await new_VenuePhoto.save();
        res.status(201).send(new_VenuePhoto);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getVenuePhoto = async (req, res) => {
    try {
        const VenuePhotos = await VenuePhotos.find();
        res.send(VenuePhotos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getVenuePhotoById = async (req, res) => {
    try {
        const { id } = req.params;
        const VenuePhoto = await VenuePhotos.findById(id);
        if (!VenuePhoto) {
            return res.status(404).send("VenuePhoto not found");
        }
        res.send(VenuePhoto);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateVenuePhoto = async (req, res) => {
    try {
        const VenuePhotoId = req.params.id;
        const updatedData = req.body;

        const updatedVenuePhoto = await VenuePhotos.findByIdAndUpdate(VenuePhotoId, updatedData, {
            new: true,
        });

        if (!updatedVenuePhoto) {
            return res.status(404).json({
                success: false,
                message: "Venue topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "VenuePhoto ma'lumotlari yangilandi.",
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
    create_VenuePhoto,
    getVenuePhoto,
    getVenuePhotoById,
    updateVenuePhoto,
};