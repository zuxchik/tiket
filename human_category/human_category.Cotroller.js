const { HumanCategory } = require("./human_category.Schema")

const create_HumanCategory = async (req, res) => {
    try {
        const {
            name,
            start_age,
            finish_age,
            gender_id
        } = req.body;

        const newhumenCategory = new HumanCategory({
            name,
            start_age,
            finish_age,
            gender_id
        });

        await newhumenCategory.save();
        res.status(201).send(newhumenCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getHumanCategory = async (req, res) => {
    try {
        const humenCategorys = await HumanCategory.find().populate("gender_id")
        res.send(humenCategorys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getHumanCategoryById = async (req, res) => {
    try {
        const humenCategorysId = req.params.id;
        const humenCategorys = await HumanCategory.findById(humenCategorysId).populate("gender_id");
        if (humenCategorys) {
            res.json({ message: "humenCategorys topildi", humenCategorys });
        }
    } catch (error) {
        console.error("Xato", error);
        res.json({ message: "Xatolik yuz berdi" });
    }
};

const updateHumanCategory = async (req, res) => {
    try {
        const humenCategoryId = req.params.id;
        const updatedData = req.body;

        const updatedhumenCategory = await HumanCategory.findByIdAndUpdate(humenCategoryId, updatedData, {
            new: true,
        });

        if (!updatedhumenCategory) {
            return res.status(404).json({
                success: false,
                message: "humenCategory topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "humenCategory ma'lumotlari yangilandi.",
            humenCategorys: updatedhumenCategory,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: humenCategoryni yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    getHumanCategoryById,
    updateHumanCategory,
    create_HumanCategory,
    getHumanCategory
};
