const { Router } = require("express");
const customerRouter = Router();
const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
} = require("../customer/customer.Controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: API endpoints for managing customers
 */

/**
 * @swagger
 * /customer/create:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     description: Create a new customer with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Customer created successfully
 *       "500":
 *         description: Internal server error
 */
customerRouter.post("/create", createCustomer);

/**
 * @swagger
 * /customer/getCustomers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customer]
 *     description: Retrieve a list of all customers
 *     responses:
 *       "200":
 *         description: A successful response with a list of customers
 *       "500":
 *         description: Internal server error
 */
customerRouter.get("/getCustomers", getCustomers);

/**
 * @swagger
 * /customer/getCustomer/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     description: Retrieve a customer by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the customer to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the customer details
 *       "404":
 *         description: Customer not found
 *       "500":
 *         description: Internal server error
 */
customerRouter.get("/getCustomer/:id", getCustomerById);

/**
 * @swagger
 * /customer/updateCustomer/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customer]
 *     description: Update a customer with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the customer to update
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Customer updated successfully
 *       "404":
 *         description: Customer not found
 *       "500":
 *         description: Internal server error
 */
customerRouter.put("/updateCustomer/:id", updateCustomer);

module.exports = { customerRouter };
