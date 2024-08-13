const { Router } = require("express");
const eventTypeRouter = Router();
const { getEventTypes, createEventType, getEventTypeById, updateEventType } = require("../event_type/event_type.Controller");
//----------------------------------
// const { Router } = require("express");
// const eventTypeRouter = Router();
// const { getEventType, createEventType, getEventTypeById, updateEventType } = require("../event_type/event_type.Controller");

// Correct function usage in the route

// module.exports = { eventTypeRouter };
//----------------------------------------------

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: API endpoints for managing event types
 */

/**
 * @swagger
 * /event_type/create:
 *   post:
 *     summary: Create a new event type
 *     tags: [EventType]
 *     description: Create a new event type with the provided details
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
 *         description: Event type created successfully
 *       "500":
 *         description: Internal server error
 */
eventTypeRouter.post("/create", createEventType);

/**
 * @swagger
 * /event_type/getEventTypes:
 *   get:
 *     summary: Get all event types
 *     tags: [EventType]
 *     description: Retrieve a list of all event types
 *     responses:
 *       "200":
 *         description: A successful response with a list of event types
 *       "500":
 *         description: Internal server error
 */
eventTypeRouter.get("/getEventTypes", getEventTypes);

/**
 * @swagger
 * /event_type/getEventType/{id}:
 *   get:
 *     summary: Get an event type by ID
 *     tags: [EventType]
 *     description: Retrieve an event type by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the event type to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the event type details
 *       "404":
 *         description: Event type not found
 *       "500":
 *         description: Internal server error
 */
eventTypeRouter.get("/getEventType/:id", getEventTypeById);

/**
 * @swagger
 * /event_type/updateEventType/{id}:
 *   put:
 *     summary: Update an event type by ID
 *     tags: [EventType]
 *     description: Update an event type with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the event type to update
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
 *         description: Event type updated successfully
 *       "404":
 *         description: Event type not found
 *       "500":
 *         description: Internal server error
 */
eventTypeRouter.put("/updateEventType/:id", updateEventType);

module.exports = { eventTypeRouter };
