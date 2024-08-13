const { CustomerAddress } = require("./customer_address.Schema");

const createCustomerAddress = async (req, res) => {
  try {
    const {
      id,
      customer_id,
      country_id,
      region_id,
      district_id,
      name,
      street,
      house,
      flat,
      location,
      post_index,
      info
    } = req.body;

    const newCustomerAddress = new CustomerAddress({
      id,
      customer_id,
      name,
      country_id,
      region_id,
      district_id,
      street,
      house,
      flat,
      location,
      post_index,
      info
    });

    await newCustomerAddress.save();
    res.status(201).send(newCustomerAddress);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCustomerAddresses = async (req, res) => {
  try {
    const customerAddresses = await CustomerAddress.find();
    res.send(customerAddresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCustomerAddressById = async (req, res) => {
  try {
    const { id } = req.params;
    const customerAddress = await CustomerAddress.findById(id).populate("customer_id country_id region_id district_id");
    if (!customerAddress) {
      return res.status(404).send("Customer address not found");
    }
    res.send(customerAddress);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCustomerAddress = async (req, res) => {
  try {
    const customerAddressId = req.params.id;
    const updatedData = req.body;

    const updatedCustomerAddress = await CustomerAddress.findByIdAndUpdate(customerAddressId, updatedData, {
      new: true,
    });

    if (!updatedCustomerAddress) {
      return res.status(404).json({
        success: false,
        message: "Customer address not found.",
      });
    }

    res.json({
      success: true,
      message: "Customer address updated successfully.",
      customerAddress: updatedCustomerAddress,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Error updating customer address.",
    });
  }
};

module.exports = {
  createCustomerAddress,
  getCustomerAddresses,
  getCustomerAddressById,
  updateCustomerAddress,
};
