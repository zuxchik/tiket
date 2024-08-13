const { Cart } = require("./cart.Schema");

const createCart = async (req, res) => {
  try {
    const {
      ticket_id,
      customer_id,
      status_id,
      createdAt,
      finishedAt,
    } = req.body;

    const newCart = new Cart({
      ticket_id,
      customer_id,
      status_id,
      createdAt,
      finishedAt
    });

    await newCart.save();
    res.status(201).send(newCart);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.send(carts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id).populate(" ticket_id customer_id status_id");
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    res.send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const updatedData = req.body;

    const updatedCart = await Cart.findByIdAndUpdate(cartId, updatedData, {
      new: true,
    });

    if (!updatedCart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    res.json({
      success: true,
      message: "Cart updated successfully.",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Error updating cart.",
    });
  }
};

module.exports = {
  createCart,
  getCarts,
  getCartById,
  updateCart,
};
