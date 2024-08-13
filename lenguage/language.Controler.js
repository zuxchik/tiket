const { language } = require("./lenguage.Schema");

const createLanguage = async (req, res) => {
  try {
    const { language: languageName, discription } = req.body;
    const newLanguage = new language({ language: languageName, discription });
    await newLanguage.save();
    res.status(201).json({ message: "Language created successfully", newLanguage });
  } catch (error) {
    console.error("Error creating language:", error);
    res.status(500).json({ message: "Server error: Unable to create language" });
  }
};

const getLanguages = async (req, res) => {
  try {
    const languages = await language.find();
    res.json({ languages });
  } catch (error) {
    console.error("Error fetching languages:", error);
    res.status(500).json({ message: "Server error: Unable to fetch languages" });
  }
};

const getLanguageById = async (req, res) => {
  try {
    const languageId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(languageId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const foundLanguage = await language.findById(languageId);
    if (foundLanguage) {
      res.json({ foundLanguage });
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    console.error("Error fetching language by ID:", error);
    res.status(500).json({ message: "Server error: Unable to fetch language by ID" });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const languageId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(languageId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const updatedData = req.body;
    const updatedLanguage = await language.findByIdAndUpdate(languageId, updatedData, { new: true });
    if (updatedLanguage) {
      res.json({ message: "Language updated successfully", updatedLanguage });
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    console.error("Error updating language:", error);
    res.status(500).json({ message: "Server error: Unable to update language" });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const languageId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(languageId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const deletedLanguage = await language.findByIdAndDelete(languageId);
    if (deletedLanguage) {
      res.json({ message: "Language deleted successfully" });
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    console.error("Error deleting language:", error);
    res.status(500).json({ message: "Server error: Unable to delete language" });
  }
};

module.exports = {
  createLanguage,
  getLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
};
