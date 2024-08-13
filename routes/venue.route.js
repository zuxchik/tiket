const { Router } = require("express");
const venueRouter = Router();
const {
  getVenueById,
  updateVenue,
  create_Venue,
  getVenue,
} = require("../venue/venue.controller");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: API endpoints for managing venues
 */

/**
 * @swagger
 * /venue/create:
 *   post:
 *     summary: Create a new venue
 *     tags: [Venue]
 *     description: Create a new venue with the provided details
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
 *         description: Venue created successfully
 *       "500":
 *         description: Internal server error
 */
venueRouter.post("/create", create_Venue);

/**
 * @swagger
 * /venue/getVenues:
 *   get:
 *     summary: Get all venues
 *     tags: [Venue]
 *     description: Retrieve a list of all venues
 *     responses:
 *       "200":
 *         description: A successful response with a list of venues
 *       "500":
 *         description: Internal server error
 */
venueRouter.get("/getVenues", getVenue);

/**
 * @swagger
 * /venue/getVenue/{id}:
 *   get:
 *     summary: Get a venue by ID
 *     tags: [Venue]
 *     description: Retrieve a venue by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the venue to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the venue details
 *       "404":
 *         description: Venue not found
 *       "500":
 *         description: Internal server error
 */
venueRouter.get("/getVenue/:id", getVenueById);

/**
 * @swagger
 * /venue/updateVenue/{id}:
 *   put:
 *     summary: Update a venue by ID
 *     tags: [Venue]
 *     description: Update a venue with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the venue to update
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
 *         description: Venue updated successfully
 *       "404":
 *         description: Venue not found
 *       "500":
 *         description: Internal server error
 */
venueRouter.put("/updateVenue/:id", updateVenue);

module.exports = { venueRouter };
