const { SectorChik } = require("./Sector.Schema");

const create_Sector = async (req, res) => {
    try {
        const {
            sector_name,
        } = req.body;

        const new_Sector = new SectorChik({
            sector_name,
        });

        await new_Sector.save();
        res.status(201).send(new_Sector);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSector = async (req, res) => {
    try {
        const Sectors = await SectorChik.find({});
        res.json({message:"EVent typelar ro`yhati",Sectors});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSectorById = async (req, res) => {
    try {
        const { id } = req.params;
        const Sector = await SectorChik.findById(id);
        if (!Sector) {
            return res.status(404).send("Sector not found");
        }
        res.json({message:"Event type topildi",Sector});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateSector = async (req, res) => {
    try {
        const SectorId = req.params.id;
        const updatedData = req.body;
        const updatedSector = await SectorChik.findByIdAndUpdate(SectorId, updatedData, {
            new: true,
        });

        if (!updatedSector) {
            return res.status(404).json({
                success: false,
                message: "Sector topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "Sector ma'lumotlari yangilandi.",
            SectorChik: updatedSector,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Sectori yangilashda xato yuz berdi.",
        });
    }
};



module.exports = {
    create_Sector,
    getSector,
    getSectorById,
    updateSector,
};