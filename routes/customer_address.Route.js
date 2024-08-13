const { Router } = require("express");
const customerAddressRouter = Router();
const {
  createCustomerAddress,
  getCustomerAddresses,
  getCustomerAddressById,
  updateCustomerAddress,
} = require("../customer_address/customer_address.Controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: API endpoints for managing customer addresses
 */

/**
 * @swagger
 * /customer_address/create:
 *   post:
 *     summary: Create a new customer address
 *     tags: [CustomerAddress]
 *     description: Create a new customer address with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               customerId:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               postalCode:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Customer address created successfully
 *       "500":
 *         description: Internal server error
 */
customerAddressRouter.post("/create", createCustomerAddress);

/**
 * @swagger
 * /customer_address/getCustomerAddresses:
 *   get:
 *     summary: Get all customer addresses
 *     tags: [CustomerAddress]
 *     description: Retrieve a list of all customer addresses
 *     responses:
 *       "200":
 *         description: A successful response with a list of customer addresses
 *       "500":
 *         description: Internal server error
 */
customerAddressRouter.get("/getCustomerAddresses", getCustomerAddresses);

/**
 * @swagger
 * /customer_address/getCustomerAddress/{id}:
 *   get:
 *     summary: Get a customer address by ID
 *     tags: [CustomerAddress]
 *     description: Retrieve a customer address by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the customer address to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the customer address details
 *       "404":
 *         description: Customer address not found
 *       "500":
 *         description: Internal server error
 */
customerAddressRouter.get("/getCustomerAddress/:id", getCustomerAddressById);

/**
 * @swagger
 * /customer_address/updateCustomerAddress/{id}:
 *   put:
 *     summary: Update a customer address by ID
 *     tags: [CustomerAddress]
 *     description: Update a customer address with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the customer address to update
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
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               postalCode:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Customer address updated successfully
 *       "404":
 *         description: Customer address not found
 *       "500":
 *         description: Internal server error
 */
customerAddressRouter.put("/updateCustomerAddress/:id", updateCustomerAddress);

module.exports = { customerAddressRouter };
