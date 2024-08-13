const { Router } = require("express");
const venue_type = Router();
const {
    createvenueType,
    getvenueType,
    getvenueTypeById,
    updatevenueType,
} = require("../venue_type/venue_type.Controller");

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: API endpoints for managing venue types
 */

/**
 * @swagger
 * /venue_type/getvenueType:
 *   get:
 *     summary: Get all venue types
 *     tags: [VenueType]
 *     description: Retrieve a list of all venue types
 *     responses:
 *       "200":
 *         description: A successful response with a list of venue types
 *       "500":
 *         description: Internal server error
 */
venue_type.get("/getvenueType", getvenueType);

/**
 * @swagger
 * /venue_type/createvenueType:
 *   post:
 *     summary: Create a new venue type
 *     tags: [VenueType]
 *     description: Create a new venue type with the provided details
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
 *         description: Venue type created successfully
 *       "500":
 *         description: Internal server error
 */
venue_type.post("/createvenueType", createvenueType);

/**
 * @swagger
 * /venue_type/getvenueTypeById/{id}:
 *   get:
 *     summary: Get a venue type by ID
 *     tags: [VenueType]
 *     description: Retrieve a venue type by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the venue type to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the venue type
 *       "404":
 *         description: Venue type not found
 *       "500":
 *         description: Internal server error
 */
venue_type.get("/getvenueTypeById/:id", getvenueTypeById);

/**
 * @swagger
 * /venue_type/updatevenueType/{id}:
 *   put:
 *     summary: Update a venue type by ID
 *     tags: [VenueType]
 *     description: Update a venue type with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the venue type to update
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
 *         description: Venue type updated successfully
 *       "404":
 *         description: Venue type not found
 *       "500":
 *         description: Internal server error
 */
venue_type.put("/updatevenueType/:id", updatevenueType);

module.exports = { venue_type };
