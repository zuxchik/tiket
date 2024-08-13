const { Router } = require("express");
const eventRouter = Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
} = require("../event/event.Controller");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: API endpoints for managing events
 */

/**
 * @swagger
 * /event/create:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     description: Create a new event with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               location:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Event created successfully
 *       "500":
 *         description: Internal server error
 */
eventRouter.post("/create", createEvent);

/**
 * @swagger
 * /event/getEvents:
 *   get:
 *     summary: Get all events
 *     tags: [Event]
 *     description: Retrieve a list of all events
 *     responses:
 *       "200":
 *         description: A successful response with a list of events
 *       "500":
 *         description: Internal server error
 */
eventRouter.get("/getEvents", getEvents);

/**
 * @swagger
 * /event/getEvent/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Event]
 *     description: Retrieve an event by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the event to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the event details
 *       "404":
 *         description: Event not found
 *       "500":
 *         description: Internal server error
 */
eventRouter.get("/getEvent/:id", getEventById);

/**
 * @swagger
 * /event/updateEvent/{id}:
 *   put:
 *     summary: Update an event by ID
 *     tags: [Event]
 *     description: Update an event with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the event to update
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
 *               date:
 *                 type: string
 *                 format: date
 *               location:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Event updated successfully
 *       "404":
 *         description: Event not found
 *       "500":
 *         description: Internal server error
 */
eventRouter.put("/updateEvent/:id", updateEvent);

module.exports = { eventRouter };
