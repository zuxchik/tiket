const { Customer } = require("./customer.Schema");

const createCustomer = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone,
      hashed_password,
      email,
      birth_date,
      gender,
      lang_id,
    } = req.body;

    const newCustomer = new Customer({
      first_name,
      last_name,
      phone,
      hashed_password,
      email,
      birth_date,
      gender,
      lang_id,
    });

    await newCustomer.save();
    res.status(201).send(newCustomer);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.send(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id).populate("gender lang_id");
    if (!customer) {
      return res.status(404).send("Customer not found");
    }
    res.send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const updatedData = req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, updatedData, {
      new: true,
    });

    if (!updatedCustomer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    res.json({
      success: true,
      message: "Customer updated successfully.",
      customer: updatedCustomer,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Error updating customer.",
    });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
};
