const { Router } = require("express");
const CountryChikRoute = Router();
const {
    create_Country,
    getCountry,
    getCountryById,
    updateCountry,
} = require("../CountryChik/CountryChik.Controller");

/**
 * @swagger
 * tags:
 *   name: CountryChik
 *   description: API endpoints for managing CountryChik
 */

/**
 * @swagger
 * /CountryChikRoute/create_Country:
 *   post:
 *     summary: Create a new CountryChik
 *     tags: [CountryChik]
 *     description: Create a new CountryChik with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                country:
 *                  type: string
 *     responses:
 *       "201":
 *         description: CountryChik created successfully
 *       "500":
 *         description: Internal server error
 */
CountryChikRoute.post("/create_Country", create_Country);

/**
 * @swagger
 * /CountryChikRoute/getCountry:
 *   get:
 *     summary: Get all CountryChik
 *     tags: [CountryChik]
 *     description: Retrieve a list of all CountryChik
 *     responses:
 *       "200":
 *         description: A successful response with a list of CountryChik
 *       "500":
 *         description: Internal server error
 */
CountryChikRoute.get("/getCountry", getCountry);

/**
 * @swagger
 * /CountryChikRoute/getCountryById/{id}:
 *   get:
 *     summary: Get a CountryChik by ID
 *     tags: [CountryChik]
 *     description: Retrieve a CountryChik by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the CountryChik to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the CountryChik details
 *       "404":
 *         description: CountryChik not found
 *       "500":
 *         description: Internal server error
 */
CountryChikRoute.get("/getCountryById/:id", getCountryById);

/**
 * @swagger 
 * /CountryChikRoute/updateCountry/{id}:
 *   put:
 *     summary: Update a CountryChik by ID
 *     tags: [CountryChik]
 *     description: Update a CountryChik with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the CountryChik to update
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
 *                country:
 *                  type: string
 *     responses:
 *       "200":
 *         description: CountryChik updated successfully
 *       "404":
 *         description: CountryChik not found
 *       "500":
 *         description: Internal server error
 */
CountryChikRoute.put("/updateCountry/:id", updateCountry);

module.exports = { CountryChikRoute };