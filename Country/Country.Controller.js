const { Country } = require("./Country.schema");

const create_Country = async (req, res) => {
    try {
        const { country } = req.body;

        const new_Country = new Country({ country });

        await new_Country.save();
        res.status(201).send(new_Country);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCountry = async (req, res) => {
    try {
        const countries = await Country.find({});
        res.json({ message: "Countrylar ro'yhati", countries });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findById(id);
        if (!country) {
            return res.status(404).send("Country not found");
        }
        res.json({ message: "Country topildi", country });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCountry = async (req, res) => {
    try {
        const countryId = req.params.id;
        const updatedData = req.body;
        const updatedCountry = await Country.findByIdAndUpdate(countryId, updatedData, { new: true });

        if (!updatedCountry) {
            return res.status(404).json({ success: false, message: "Country topilmadi." });
        }

        res.json({ success: true, message: "Country ma'lumotlari yangilandi.", country: updatedCountry });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({ success: false, message: "Server xatosi: Country yangilashda xato yuz berdi." });
    }
};

module.exports = {
    create_Country,
    getCountry,
    getCountryById,
    updateCountry,
};
