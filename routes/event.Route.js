const { Router } = require("express");
const eventRouter = Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
} = require("../event/event.Controller");

const { eventValidation } = require("../event/event.validetion.Schema")

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
 *   name: Event
 *   description: API endpoints for managing events
 */

/**
 * @swagger
 * /eventRouter/createEvent:
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
 *                type: string
 *               photo:
 *                type: string
 *               start_date:
 *                type: date
 *               start_time:
 *                type: date
 *               finish_date:
 *                type: date
 *               finish_time:
 *                type: date
 *               info:
 *                type: string
 *               event_type_id:
 *                type: string
 *               human_category_id:
 *                type: string
 *               venue_id:
 *                type: string
 *               lang_id:
 *                type: string
 *               release_date:
 *                type: date
 *     responses:
 *       "201":
 *         description: Event created successfully
 *       "500":
 *         description: Internal server error
 */
eventRouter.post("/createEvent", ValidateSchema(eventValidation), createEvent);

/**
 * @swagger
 * /eventRouter/getEvents:
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
 * /eventRouter/getEvent/{id}:
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
 * /eventRouter/updateEvent/{id}:
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
 *                type: string
 *               photo:
 *                type: string
 *               start_date:
 *                type: date
 *               start_time:
 *                type: date
 *               finish_date:
 *                type: date
 *               finish_time:
 *                type: date
 *               info:
 *                type: string
 *               event_type_id:
 *                type: string
 *               human_category_id:
 *                type: string
 *               venue_id:
 *                type: string
 *               lang_id:
 *                type: string
 *               release_date:
 *                type: date
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
