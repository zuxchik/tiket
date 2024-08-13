const { District } = require("./discrict.Schema")

const createDistrict = async (req, res) => {
    try {
        const { name, region_id } = req.body;

        const newDistrict = new District({
            name,
            region_id,
        });

        await newDistrict.save();
        res.status(201).send(newDistrict);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getDistrict = async (req, res) => {
    try {
        const Districts = await District.find().populate("region_id");
        res.send(Districts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getDistrictById = async (req, res) => {
    try {
        const DistrictId = req.params.id;
        const Districts = await District.findById(DistrictId).populate("region_id");
        if (Districts) {
            res.json({ message: "District topildi", Districts });
        }
    } catch (error) {
        console.error("Xato", error);
        res.json({ message: "Xatolik yuz berdi" });
    }
};

const updateDistrict = async (req, res) => {
    try {
        const DistrictId = req.params.id;
        const updatedData = req.body;

        const updatedDistrict = await District.findByIdAndUpdate(DistrictId, updatedData, {
            new: true,
        });

        if (!updatedDistrict) {
            return res.status(404).json({
                success: false,
                message: "District topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "District ma'lumotlari yangilandi.",
            DistrictChik: updatedDistrict,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Districtni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    createDistrict,
    getDistrict,
    getDistrictById,
    updateDistrict,
};
