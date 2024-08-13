const { Region } = require("./region.Schema");

const createRegion = async (req, res) => {
    try {
        const {
            name,
            login,
            hashed_password,
            is_active,
            is_creator
        } = req.body;

        const newRegion = new Region({
            name,
            login,
            hashed_password,
            is_active,
            is_creator
        });

        await newRegion.save();
        res.status(201).send(newRegion);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getRegion = async (req, res) => {
    try {
        const Regions = await Region.find();
        res.send(Regions);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getRegionById = async (req, res) => {
    try {
        const RegionId = req.params.id;
        const Regions = await Region.findById(RegionId);
        if (Regions) {
            res.json({ message: "Region topildi", Regions })
        }
    } catch (error) {
        console.error("Xato", error)
        res.json({ message: "Xatolik yuz berdi" })
    }
};

const updateRegion = async (req, res) => {
    try {
        const RegionId = req.params.id;
        const updatedData = req.body;

        const updatedRegion = await Region.findByIdAndUpdate(RegionId, updatedData, {
            new: true,
        });

        if (!updatedRegion) {
            return res.status(404).json({
                success: false,
                message: "Region topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Region ma'lumotlari yangilandi.",
            RegionsChik: updatedRegion,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Regioni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    createRegion,
    getRegion,
    getRegionById,
    updateRegion,
};