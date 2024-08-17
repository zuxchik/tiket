const { Language } = require("./lenguage.Schema")

const create_Language = async (req, res) => {
  try {
    const {
      language,
      discription
    } = req.body;

    const newlanguage = new Language({
      language,
      discription
    });

    await newlanguage.save();
    res.status(201).send(newlanguage);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLanguage = async (req, res) => {
  try {
    const languages = await Language.find()
    res.send(languages);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getLanguageById = async (req, res) => {
  try {
    const languagesId = req.params.id;
    const languages = await Language.findById(languagesId);
    if (languages) {
      res.json({ message: "languages topildi", languages });
    }
  } catch (error) {
    console.error("Xato", error);
    res.json({ message: "Xatolik yuz berdi" });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const languageId = req.params.id;
    const updatedData = req.body;

    const updatedlanguage = await Language.findByIdAndUpdate(languageId, updatedData, {
      new: true,
    });

    if (!updatedlanguage) {
      return res.status(404).json({
        success: false,
        message: "language topilmadi.",
      });
    }

    res.json({
      success: true,
      message: "language ma'lumotlari yangilandi.",
      languages: updatedlanguage,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: languageni yangilashda xato yuz berdi.",
    });
  }
};

module.exports = {
  create_Language,
  getLanguageById,
  getLanguage,
  updateLanguage
};
