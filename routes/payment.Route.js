const { Router } = require("express");
const paymentRouter = Router();
const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
} = require("../payment/payment.Controller");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: API endpoints for managing payments
 */

/**
 * @swagger
 * /payment/create:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payment]
 *     description: Create a new payment with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                name:
 *                  type: string
 *     responses:
 *       "201":
 *         description: Payment created successfully
 *       "500":
 *         description: Internal server error
 */
paymentRouter.post("/create", createPayment);

/**
 * @swagger
 * /payment/getPayments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payment]
 *     description: Retrieve a list of all payments
 *     responses:
 *       "200":
 *         description: A successful response with a list of payments
 *       "500":
 *         description: Internal server error
 */
paymentRouter.get("/getPayments", getPayments);

/**
 * @swagger
 * /payment/getPayment/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payment]
 *     description: Retrieve a payment by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the payment to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the payment details
 *       "404":
 *         description: Payment not found
 *       "500":
 *         description: Internal server error
 */
paymentRouter.get("/getPayment/:id", getPaymentById);

/**
 * @swagger
 * /payment/updatePayment/{id}:
 *   put:
 *     summary: Update a payment by ID
 *     tags: [Payment]
 *     description: Update a payment with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the payment to update
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
 *                name:
 *                  type: string
 *     responses:
 *       "200":
 *         description: Payment updated successfully
 *       "404":
 *         description: Payment not found
 *       "500":
 *         description: Internal server error
 */
paymentRouter.put("/updatePayment/:id", updatePayment);

module.exports = { paymentRouter };
