const { CustomerCard } = require("./customer_card.Schema");

const createCustomerCard = async (req, res) => {
  try {
    const {
      id,
      customer_id,
      name,
      phone,
      number,
      year,
      month,
      is_active,
      is_main
    } = req.body;

    const newCustomerCard = new CustomerCard({
      id,
      customer_id,
      name,
      phone,
      number,
      year,
      month,
      is_active,
      is_main
    });

    await newCustomerCard.save();
    res.status(201).send(newCustomerCard);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCustomerCards = async (req, res) => {
  try {
    const customerCards = await CustomerCard.find();
    res.send(customerCards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCustomerCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const customerCard = await CustomerCard.findById(id).populate("customer_id");
    if (!customerCard) {
      return res.status(404).send("Customer card not found");
    }
    res.send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCustomerCard = async (req, res) => {
  try {
    const customerCardId = req.params.id;
    const updatedData = req.body;

    const updatedCustomerCard = await CustomerCard.findByIdAndUpdate(customerCardId, updatedData, {
      new: true,
    });

    if (!updatedCustomerCard) {
      return res.status(404).json({
        success: false,
        message: "Customer card not found.",
      });
    }

    res.json({
      success: true,
      message: "Customer card updated successfully.",
      customerCard: updatedCustomerCard,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Error updating customer card.",
    });
  }
};

module.exports = {
  createCustomerCard,
  getCustomerCards,
  getCustomerCardById,
  updateCustomerCard,
};
