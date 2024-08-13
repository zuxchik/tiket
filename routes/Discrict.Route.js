const { Router } = require("express");
const Discrict = Router();

const {
    createDistrict,
    getDistrict,
    getDistrictById,
    updateDistrict,
} = require("../discrict/discrict.Controller");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: API endpoints for managing Discticts
 */

/**
 * @swagger
 * /Discrict/createDistrict:
 *   post:
 *     summary: Create a new Discrict
 *     tags: [Discrict]
 *     description: Create a new Discrict with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *              name:
 *                type: string
 *              region_id:
 *                type: string
 *     responses:
 *       "201":
 *         description: Discrict created successfully
 *       "500":
 *         description: Internal server error
 */
Discrict.post("/createDistrict", createDistrict);

/**
 * @swagger
 * /Discrict/getDiscrict:
 *   get:
 *     summary: Get all Discricts
 *     tags: [Discrict]
 *     description: Retrieve a list of all Discricts
 *     responses:
 *       "200":
 *         description: A successful response with a list of Discricts
 *       "500":
 *         description: Internal server error
 */
Discrict.get("/getDistrict", getDistrict);

/**
 * @swagger
 * /Discrict/getDistrictById/{id}:
 *   get:
 *     summary: Get an Discrict by ID
 *     tags: [Discrict]
 *     description: Retrieve an Discrict by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Discrict to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Discrict details
 *       "404":
 *         description: Discrict not found
 *       "500":
 *         description: Internal server error
 */
Discrict.get("/getDistrictById/:id", getDistrictById);

/**
 * @swagger
 * /Discrict/updateDistrict/{id}:
 *   put:
 *     summary: Update an Discrict by ID
 *     tags: [Discrict]
 *     description: Update an Discrict with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Discrict to update
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
 *                type: string
 *              region_id:
 *                type: string
 *
 *     responses:
 *       "200":
 *         description: Discrict updated successfully
 *       "404":
 *         description: Discrict not found
 *       "500":
 *         description: Internal server error
 */
Discrict.put("/updateDistrict/:id", updateDistrict);

module.exports = { Discrict }; 