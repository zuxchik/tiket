const { AdminChik } = require("./Admin.Schema");

const createAdmin = async (req, res) => {
  try {
    const {
      name,
      login,
      hashed_password,
      is_active,
      is_creator
    } = req.body;

    const newAdmin = new AdminChik({
      name,
      login,
      hashed_password,
      is_active,
      is_creator
    });

    await newAdmin.save();
    res.status(201).send(newAdmin);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAdmin = async (req, res) => {
  try {
    const admins = await AdminChik.find();
    res.send(admins);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAdminById = async (req, res) => {
  try {
    const  adminId  = req.params.id;
    const admin = await AdminChik.findById(adminId);
    if (admin) {
       res.json({message: "Admin topildi", admin})
    }
  } catch (error) {
    console.error("Xato", error)
    res.json({message: "Xatolik yuz berdi"})
  }
};

const updateAdmin = async (req, res) => {
  try {
    const AdminId = req.params.id;
    const updatedData = req.body;

    const updatedAdmin = await AdminChik.findByIdAndUpdate(AdminId, updatedData, {
      new: true,
    });

    if (!updatedAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin topilmadi.",
      });
    }

    res.json({
      success: true,
      message: "Admin ma'lumotlari yangilandi.",
      AdminsChik: updatedAdmin,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Admini yangilashda xato yuz berdi.",
    });
  }
};

module.exports = {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
};