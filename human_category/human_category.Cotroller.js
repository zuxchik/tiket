const { HumanCategory } = require("./human_category.Schema");

const create_HumanCategory = async (req, res) => {
    try {
        const {
            name,
            start_age,
            finish_age,
            gender_id
        } = req.body;

        const new_HumanCategory = new HumanCategory({
            name,
            start_age,
            finish_age,
            gender_id
        });

        await new_HumanCategory.save();
        res.status(201).send(new_HumanCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getHumanCategory = async (req, res) => {
    try {
        const HumanCategorys = await HumanCategory.find().populate("gender_id");
        res.send(HumanCategorys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getHumanCategoryById = async (req, res) => {
    try {
        const { HumanCategoryid } = req.params;
        const humanCategory = await HumanCategory.findById(HumanCategoryid).populate("gender_id");
        if (!humanCategory) {
            return res.status(404).send("HumanCategory not found");
        }
        res.send(humanCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateHumanCategory = async (req, res) => {
    try {
        const HumanCategoryId = req.params.id;
        const updatedData = req.body;

        const updatedHumanCategory = await HumanCategory.findByIdAndUpdate(HumanCategoryId, updatedData, {
            new: true,
        });

        if (!updatedHumanCategory) {
            return res.status(404).json({
                success: false,
                message: "HumanCategory topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "HumanCategory ma'lumotlari yangilandi.",
            HumanCategoryChik: updatedHumanCategory,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: HumanCategoryi yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_HumanCategory,
    getHumanCategory,
    getHumanCategoryById,
    updateHumanCategory,
};