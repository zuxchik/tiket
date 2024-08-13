const { Router } = require("express");
const cartRouter = Router();
const {
  createCart,
  getCarts,
  getCartById,
  updateCart,
} = require("../cart/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints for managing carts
 */

/**
 * @swagger
 * /cart/create:
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
 *               userId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *     responses:
 *       "201":
 *         description: Cart created successfully
 *       "500":
 *         description: Internal server error
 */
cartRouter.post("/create", createCart);

/**
 * @swagger
 * /cart/getCarts:
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
 * /cart/getCart/{id}:
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
cartRouter.get("/getCart/:id", getCartById);

/**
 * @swagger
 * /cart/updateCart/{id}:
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
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: integer
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
