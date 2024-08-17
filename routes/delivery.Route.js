const { Router } = require("express");
const DeliveryRuote = Router();

const {
    createDelivery,
    getDelivery,
    getDeliveryById,
    updateDelivery
} = require("../delivery/delivery.Controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: API endpoints for managing Delivery
 */

/**
 * @swagger
 * /DeliveryRuote/createDelivery:
 *   post:
 *     summary: Create a new Delivery
 *     tags: [Delivery]
 *     description: Create a new Delivery with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *              name:
 *                type: string
 *     responses:
 *       "201":
 *         description: Delivery created successfully
 *       "500":
 *         description: Internal server error
 */
DeliveryRuote.post("/createDelivery", createDelivery);

/**
 * @swagger
 * /DeliveryRuote/getDelivery:
 *   get:
 *     summary: Get all Deliverys
 *     tags: [Delivery]
 *     description: Retrieve a list of all Deliverys
 *     responses:
 *       "200":
 *         description: A successful response with a list of Deliverys
 *       "500":
 *         description: Internal server error
 */
DeliveryRuote.get("/getDelivery", getDelivery);

/**
 * @swagger
 * /DeliveryRuote/getDeliveryById/{id}:
 *   get:
 *     summary: Get a Delivery by ID
 *     tags: [Delivery]
 *     description: Retrieve a Delivery by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Delivery to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Delivery details
 *       "404":
 *         description: Delivery not found
 *       "500":
 *         description: Internal server error
 */
DeliveryRuote.get("/getDeliveryById/:id", getDeliveryById);

/**
 * @swagger
 * /DeliveryRuote/updateDelivery/{id}:
 *   put:
 *     summary: Update a Delivery by ID
 *     tags: [Delivery]
 *     description: Update a Delivery with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Delivery to update
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
 *              name:
 *                type: string
 *
 *     responses:
 *       "200":
 *         description: Delivery updated successfully
 *       "404":
 *         description: Delivery not found
 *       "500":
 *         description: Internal server error
 */
DeliveryRuote.put("/updateDelivery/:id", updateDelivery);

module.exports = { DeliveryRuote };
