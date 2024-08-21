const { Router } = require("express");
const cartRouter = Router();
const {
  createCart,
  getCarts,
  getCartById,
  updateCart,
} = require("../cart/cart.controller");

const { cartValidation } = require("../cart/cart.validetion.Schema")

const ValidateSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints for managing carts
 */

/**
 * @swagger
 * /cartRouter/createCart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     description: Create a new cart with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               ticket_id:
 *                type: string
 *               customer_id:
 *                type: string
 *               createdAt:
 *                type: Date
 *               finishedAt:
 *                type: Date
 *               status_id:
 *                type: string
 *     responses:
 *       "201":
 *         description: Cart created successfully
 *       "500":
 *         description: Internal server error
 */
cartRouter.post("/createCart", ValidateSchema(cartValidation), createCart);

/**
 * @swagger
 * /cartRouter/getCarts:
 *   get:
 *     summary: Get all carts
 *     tags: [Cart]
 *     description: Retrieve a list of all carts
 *     responses:
 *       "200":
 *         description: A successful response with a list of carts
 *       "500":
 *         description: Internal server error
 */
cartRouter.get("/getCarts", getCarts);

/**
 * @swagger
 * /cartRouter/getCartById/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Cart]
 *     description: Retrieve a cart by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the cart to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the cart details
 *       "404":
 *         description: Cart not found
 *       "500":
 *         description: Internal server error
 */
cartRouter.get("/getCartById/:id", getCartById);

/**
 * @swagger
 * /cartRouter/updateCart/{id}:
 *   put:
 *     summary: Update a cart by ID
 *     tags: [Cart]
 *     description: Update a cart with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the cart to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                type: string
 *               customer_id:
 *                type: string
 *               createdAt:
 *                type: Date
 *               finishedAt:
 *                type: Date
 *               status_id:
 *                type: string
 *     responses:
 *       "200":
 *         description: Cart updated successfully
 *       "404":
 *         description: Cart not found
 *       "500":
 *         description: Internal server error
 */
cartRouter.put("/updateCart/:id", updateCart);

module.exports = { cartRouter };
