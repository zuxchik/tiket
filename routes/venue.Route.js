const { Router } = require("express");
const Venue = Router();

const {
    create_Venue,
    getVenue,
    getVenueById,
    updateVenue
} = require("../venue/venue.controller");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: API endpoints for managing Venue
 */

/**
 * @swagger
 * /Venue/create_Venue:
 *   post:
 *     summary: Create a new Venue
 *     tags: [Venue]
 *     description: Create a new Venue with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *              name:
 *               type: string
 *              address:
 *               type: string
 *              location:
 *               type: string
 *              site:
 *               type: string
 *              phone:
 *               type: string
 *              venue_type_id:
 *               type: string
 *              schema:
 *               type: string
 *     responses:
 *       "201":
 *         description: Venue created successfully
 *       "500":
 *         description: Internal server error
 */
Venue.post("/create_Venue", create_Venue);

/**
 * @swagger
 * /Venue/getVenueRoute:
 *   get:
 *     summary: Get all Venue
 *     tags: [Venue]
 *     description: Retrieve a list of all Venue
 *     responses:
 *       "200":
 *         description: A successful response with a list of Venue
 *       "500":
 *         description: Internal server error
 */
Venue.get("/getVenueRoute", getVenue);

/**
 * @swagger
 * /Venue/getVenueById/{id}:
 *   get:
 *     summary: Get a Venue by ID
 *     tags: [Venue]
 *     description: Retrieve a Venue by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Venue to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Venue details
 *       "404":
 *         description: Venue not found
 *       "500":
 *         description: Internal server error
 */
Venue.get("/getVenueById/:id", getVenueById);

/**
 * @swagger
 * /Venue/updateVenue/{id}:
 *   put:
 *     summary: Update a Venue by ID
 *     tags: [Venue]
 *     description: Update a Venue with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Venue to update
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
 *               type: string
 *              address:
 *               type: string
 *              location:
 *               type: string
 *              site:
 *               type: string
 *              phone:
 *               type: string
 *              venue_type_id:
 *               type: string
 *              schema:
 *               type: string
 *
 *     responses:
 *       "200":
 *         description: Venue updated successfully
 *       "404":
 *         description: Venue not found
 *       "500":
 *         description: Internal server error
 */
Venue.put("/updateVenue/:id", updateVenue);

module.exports = { Venue };
