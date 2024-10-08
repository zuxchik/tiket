const { Router } = require("express");
const TicketTypeChikRoute = Router();
const {
    create_Ticket_Chik,
    getTicket_Chik,
    getTicket_ChikById,
    updateTicket_Chik,
} = require("../Ticket.Type/TicketType.Controller");

const { ticket_typeValidation } = require("../Ticket.Type/TicketType.validetion.schema")

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
 *   name: TicketTypeChik
 *   description: API endpoints for managing TicketTypeChik
 */

/**
 * @swagger
 * /TicketTypeChik/create_Ticket_Chik:
 *   post:
 *     summary: Create a new TicketTypeChik
 *     tags: [TicketTypeChik]
 *     description: Create a new TicketTypeChik with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                color:
 *                  type: string
 *                name:
 *                  type: string
 *                ticket_id:
 *                  type: string
 *     responses:
 *       "201":
 *         description: TicketTypeChik created successfully
 *       "500":
 *         description: Internal server error
 */
TicketTypeChikRoute.post("/create_Ticket_Chik", ValidateSchema(ticket_typeValidation), create_Ticket_Chik);

/**
 * @swagger
 * /TicketTypeChik/getTicket_Chik:
 *   get:
 *     summary: Get all TicketTypeChik
 *     tags: [TicketTypeChik]
 *     description: Retrieve a list of all TicketTypeChik
 *     responses:
 *       "200":
 *         description: A successful response with a list of TicketTypeChik
 *       "500":
 *         description: Internal server error
 */
TicketTypeChikRoute.get("/getTicket_Chik", getTicket_Chik);

/**
 * @swagger
 * /TicketTypeChik/getTicket_ChikById/{id}:
 *   get:
 *     summary: Get a TicketTypeChik by ID
 *     tags: [TicketTypeChik]
 *     description: Retrieve a TicketTypeChik by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the TicketTypeChik to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the TicketTypeChik details
 *       "404":
 *         description: TicketTypeChik not found
 *       "500":
 *         description: Internal server error
 */
TicketTypeChikRoute.get("/getTicket_ChikById/:id", getTicket_ChikById);

/**
 * @swagger 
 * /TicketTypeChik/updateTicket_Chik/{id}:
 *   put:
 *     summary: Update a TicketTypeChik by ID
 *     tags: [TicketTypeChik]
 *     description: Update a TicketTypeChik with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the TicketTypeChik to update
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
 *                color:
 *                  type: string
 *                name:
 *                  type: string
 *                ticket_id:
 *                  type: string
 *     responses:
 *       "200":
 *         description: TicketTypeChik updated successfully
 *       "404":
 *         description: TicketTypeChik not found
 *       "500":
 *         description: Internal server error
 */
TicketTypeChikRoute.put("/updateTicket_Chik/:id", updateTicket_Chik);

module.exports = { TicketTypeChikRoute };
