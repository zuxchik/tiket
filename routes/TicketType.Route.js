const { Router } = require("express");
const TicketTypeChikRoute = Router();
const {
    create_Ticket_Chik,
    getTicket_Chik,
    getTicket_ChikById,
    updateTicket_Chik,
} = require("../Ticket.Type/TicketType.Controller");

/**
 * @swagger
 * tags:
 *   name: TicketTypeChik
 *   description: API endpoints for managing TicketTypeChik
 */

/**
 * @swagger
 * /TicketTypeChikRoute/create_Ticket_Chik:
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
TicketTypeChikRoute.post("/create_Ticket_Chik", create_Ticket_Chik);

/**
 * @swagger
 * /TicketTypeChikRoute/getTicket_Chik:
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
 * /TicketTypeChikRoute/getTicket_ChikById/{id}:
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
 * /TicketTypeChikRoute/updateTicket_Chik/{id}:
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
