const { Language } = require("./lenguage.Schema");

const createLanguage = async (req, res) => {
  try {
    const { Language: LanguageName, discription } = req.body;
    const newLanguage = new Language({ Language: LanguageName, discription });
    await newLanguage.save();
    res.status(201).json({ message: "Language created successfully", newLanguage });
  } catch (error) {
    console.error("Error creating Language:", error);
    res.status(500).json({ message: "Server error: Unable to create Language" });
  }
};

const getLanguages = async (req, res) => {
  try {
    const Languages = await Language.find();
    res.json({ Languages });
  } catch (error) {
    console.error("Error fetching Languages:", error);
    res.status(500).json({ message: "Server error: Unable to fetch Languages" });
  }
};

const getLanguageById = async (req, res) => {
  try {
    const LanguageId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(LanguageId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const foundLanguage = await Language.findById(LanguageId);
    if (foundLanguage) {
      res.json({ foundLanguage });
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    console.error("Error fetching Language by ID:", error);
    res.status(500).json({ message: "Server error: Unable to fetch Language by ID" });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const LanguageId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(LanguageId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const updatedData = req.body;
    const updatedLanguage = await Language.findByIdAndUpdate(LanguageId, updatedData, { new: true });
    if (updatedLanguage) {
      res.json({ message: "Language updated successfully", updatedLanguage });
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    console.error("Error updating Language:", error);
    res.status(500).json({ message: "Server error: Unable to update Language" });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const LanguageId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(LanguageId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const deletedLanguage = await Language.findByIdAndDelete(LanguageId);
    if (deletedLanguage) {
      res.json({ message: "Language deleted successfully" });
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    console.error("Error deleting Language:", error);
    res.status(500).json({ message: "Server error: Unable to delete Language" });
  }
};

module.exports = {
  createLanguage,
  getLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
};
