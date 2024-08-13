const { Router } = require("express");
const ticketRouter = Router();
const { getTiketCheks, create_TiketCheks, getTiketCheksById, updateTiketCheks } = require("../ticket/tucket.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: API endpoints for managing tickets
 */

/**
 * @swagger
 * /ticket/create_TiketCheks:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Ticket]
 *     description: Create a new ticket with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Ticket created successfully
 *       "500":
 *         description: Internal server error
 */
ticketRouter.post("/create_TiketCheks", create_TiketCheks);

/**
 * @swagger
 * /ticket/getTiketCheks:
 *   get:
 *     summary: Get all tickets
 *     tags: [Ticket]
 *     description: Retrieve a list of all tickets
 *     responses:
 *       "200":
 *         description: A successful response with a list of tickets
 *       "500":
 *         description: Internal server error
 */
ticketRouter.get("/getTiketCheks", getTiketCheks);

/**
 * @swagger
 * /ticket/getTiketCheksById/{id}:
 *   get:
 *     summary: Get a ticket by ID
 *     tags: [Ticket]
 *     description: Retrieve a ticket by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the ticket to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the ticket details
 *       "404":
 *         description: Ticket not found
 *       "500":
 *         description: Internal server error
 */
ticketRouter.get("/getTiketCheksById/:id", getTiketCheksById);

/**
 * @swagger
 * /ticket/updateTiketCheks/{id}:
 *   put:
 *     summary: Update a ticket by ID
 *     tags: [Ticket]
 *     description: Update a ticket with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the ticket to update
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
 *     responses:
 *       "200":
 *         description: Ticket updated successfully
 *       "404":
 *         description: Ticket not found
 *       "500":
 *         description: Internal server error
 */
ticketRouter.put("/updateTiketCheks/:id", updateTiketCheks);

module.exports = { ticketRouter };
