const { Router } = require("express");
const customerCardRouter = Router();
const {
  createCustomerCard,
  getCustomerCards,
  getCustomerCardById,
  updateCustomerCard,
} = require("../customer_card/customer_card.Controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: API endpoints for managing customer cards
 */

/**
 * @swagger
 * /customer_card/create:
 *   post:
 *     summary: Create a new customer card
 *     tags: [CustomerCard]
 *     description: Create a new customer card with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               customerId:
 *                 type: string
 *               cardNumber:
 *                 type: string
 *               expiryDate:
 *                 type: string
 *                 format: date
 *               cardType:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Customer card created successfully
 *       "500":
 *         description: Internal server error
 */
customerCardRouter.post("/create", createCustomerCard);

/**
 * @swagger
 * /customer_card/getCustomerCards:
 *   get:
 *     summary: Get all customer cards
 *     tags: [CustomerCard]
 *     description: Retrieve a list of all customer cards
 *     responses:
 *       "200":
 *         description: A successful response with a list of customer cards
 *       "500":
 *         description: Internal server error
 */
customerCardRouter.get("/getCustomerCards", getCustomerCards);

/**
 * @swagger
 * /customer_card/getCustomerCard/{id}:
 *   get:
 *     summary: Get a customer card by ID
 *     tags: [CustomerCard]
 *     description: Retrieve a customer card by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the customer card to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the customer card details
 *       "404":
 *         description: Customer card not found
 *       "500":
 *         description: Internal server error
 */
customerCardRouter.get("/getCustomerCard/:id", getCustomerCardById);

/**
 * @swagger
 * /customer_card/updateCustomerCard/{id}:
 *   put:
 *     summary: Update a customer card by ID
 *     tags: [CustomerCard]
 *     description: Update a customer card with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the customer card to update
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
 *               cardNumber:
 *                 type: string
 *               expiryDate:
 *                 type: string
 *                 format: date
 *               cardType:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Customer card updated successfully
 *       "404":
 *         description: Customer card not found
 *       "500":
 *         description: Internal server error
 */
customerCardRouter.put("/updateCustomerCard/:id", updateCustomerCard);

module.exports = { customerCardRouter };
