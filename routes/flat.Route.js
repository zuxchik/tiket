const { Router } = require("express");
const flatRoute = Router();
const {
    create_Flat,
    getFlat,
    getFlatById,
    updateFlat,
} = require("../flat/flat.Controller");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: API endpoints for managing Flats
 */

/**
 * @swagger
 * /flatRoute/create_Flat:
 *   post:
 *     summary: Create a new Flat
 *     tags: [Flat]
 *     description: Create a new Flat with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               etaj:
 *                 type: string
 *               condition:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Flat created successfully
 *       "500":
 *         description: Internal server error
 */
flatRoute.post("/create_Flat", create_Flat);

/**
 * @swagger
 * /flatRoute/getFlat:
 *   get:
 *     summary: Get all Flats
 *     tags: [Flat]
 *     description: Retrieve a list of all Flats
 *     responses:
 *       "200":
 *         description: A successful response with a list of Flats
 *       "500":
 *         description: Internal server error
 */
flatRoute.get("/getFlat", getFlat);

/**
 * @swagger
 * /flatRoute/getFlatById/{id}:
 *   get:
 *     summary: Get an Flat by ID
 *     tags: [Flat]
 *     description: Retrieve an Flat by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Flat to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Flat details
 *       "404":
 *         description: Flat not found
 *       "500":
 *         description: Internal server error
 */
flatRoute.get("/getFlatById/:id", getFlatById);

/**
 * @swagger
 * /flatRoute/updateFlat/{id}:
 *   put:
 *     summary: Update an Flat by ID
 *     tags: [Flat]
 *     description: Update an Flat with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Flat to update
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
 *                etaj:
 *                 type: Number
 *                condition:
 *                 type: String
 *     responses:
 *       "200":
 *         description: Flat updated successfully
 *       "404":
 *         description: Flat not found
 *       "500":
 *         description: Internal server error
 */
flatRoute.put("/updateFlat/:id", updateFlat);

module.exports = { flatRoute };
