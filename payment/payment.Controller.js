const { Payment } = require("../payment/payment.Schema");

const createPayment = async (req, res) => {
  try {
    const { name } = req.body;

    const newPayment = new Payment({
      name,
    });

    await newPayment.save();
    res.status(201).send(newPayment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.send(payments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);
    if (payment) {
      res.json({ message: "To'lov topildi", payment });
    } else {
      res.status(404).json({ message: "To'lov topilmadi" });
    }
  } catch (error) {
    console.error("Xato", error);
    res.status(500).json({ message: "Xatolik yuz berdi" });
  }
};

const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const updatedData = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(paymentId, updatedData, {
      new: true,
    });

    if (!updatedPayment) {
      return res.status(404).json({
        success: false,
        message: "To'lov topilmadi.",
      });
    }

    res.json({
      success: true,
      message: "To'lov ma'lumotlari yangilandi.",
      payment: updatedPayment,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: To'lovni yangilashda xato yuz berdi.",
    });
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
};
