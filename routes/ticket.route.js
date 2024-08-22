const { Router } = require("express");
const ticketRouter = Router();
const {
    create_TiketCheks,
    getTiketCheks,
    getTiketCheksById,
    updateTiketCheks } = require("../ticket/tucket.controller");

    const { ticketValidation } = require("../ticket/ticket.validetion")
    
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
 *   name: Ticket
 *   description: API endpoints for managing tickets
 */

/**
 * @swagger
 * /ticket/createTicketChecks:
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
 *               event_id:
 *                type: string
 *               seat_id:
 *                type: string
 *               status_id:
 *                type: string
 *               price:
 *                type: number
 *               service_fee:
 *                type: number
 *               ticket_type:
 *                type: number
 *     responses:
 *       "201":
 *         description: Ticket created successfully
 *       "500":
 *         description: Internal server error
 */
ticketRouter.post("/createTicketChecks", ValidateSchema(ticketValidation), create_TiketCheks);

/**
 * @swagger
 * /ticket/getTicketChecks:
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
ticketRouter.get("/getTicketChecks", getTiketCheks);

/**
 * @swagger
 * /ticket/getTicketChecksById/{id}:
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
ticketRouter.get("/getTicketChecksById/:id", getTiketCheksById);

/**
 * @swagger
 * /ticket/updateTicketChecks/{id}:
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
 *               event_id:
 *                type: string
 *               seat_id:
 *                type: string
 *               status_id:
 *                type: string
 *               price:
 *                type: number
 *               service_fee:
 *                type: number
 *               ticket_type:
 *                type: number
 *     responses:
 *       "200":
 *         description: Ticket updated successfully
 *       "404":
 *         description: Ticket not found
 *       "500":
 *         description: Internal server error
 */
ticketRouter.put("/updateTicketChecks/:id", updateTiketCheks);

module.exports = { ticketRouter };
