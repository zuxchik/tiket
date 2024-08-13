const { venue_TypeChik } = require("./venue_type.Schema");

const createvenueType = async (req, res) => {
  try {
    const {
      name,
      login,
      hashed_password,
      // is_active,
      // is_creator,
    } = req.body;

    const newvenueType = new venue_TypeChik({
      name,
      login,
      hashed_password,
      // is_active,
      // is_creator,
    });

    await newvenueType.save();
    res.status(201).send(newvenueType);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getvenueType = async (req, res) => {
  try {
    const venueTypes = await venue_TypeChik.find();
    res.send(venueTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getvenueTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const venueType = await venue_TypeChik.findById(id);
    if (!venueType) {
      return res.status(404).send("venueType not found");
    }
    res.send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatevenueType = async (req, res) => {
  try {
    const venueTypeId = req.params.id;
    const updatedData = req.body;

    const updatedvenueType = await venue_TypeChik.findByIdAndUpdate(venueTypeId, updatedData, {
      new: true,
    });

    if (!updatedvenueType) {
      return res.status(404).json({
        success: false,
        message: "venueType topilmadi.",
      });
    }

    res.json({
      success: true,
      message: "venueType ma'lumotlari yangilandi.",
      venueTypeChik: updatedvenueType,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: venueTypei yangilashda xato yuz berdi.",
    });
  }
};

module.exports = {
  createvenueType,
  getvenueType,
  getvenueTypeById,
  updatevenueType,
};