const { Router } = require("express");
const District = Router();

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
 *   description: API endpoints for managing Districts
 */

/**
 * @swagger
 * /District/createDistrict:
 *   post:
 *     summary: Create a new District
 *     tags: [District]
 *     description: Create a new District with the provided details
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
 *         description: District created successfully
 *       "500":
 *         description: Internal server error
 */
District.post("/createDistrict", createDistrict);

/**
 * @swagger
 * /District/getDistrict:
 *   get:
 *     summary: Get all Districts
 *     tags: [District]
 *     description: Retrieve a list of all Districts
 *     responses:
 *       "200":
 *         description: A successful response with a list of Districts
 *       "500":
 *         description: Internal server error
 */
District.get("/getDistrict", getDistrict);

/**
 * @swagger
 * /District/getDistrictById/{id}:
 *   get:
 *     summary: Get a District by ID
 *     tags: [District]
 *     description: Retrieve a District by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the District to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the District details
 *       "404":
 *         description: District not found
 *       "500":
 *         description: Internal server error
 */
District.get("/getDistrictById/:id", getDistrictById);

/**
 * @swagger
 * /District/updateDistrict/{id}:
 *   put:
 *     summary: Update a District by ID
 *     tags: [District]
 *     description: Update a District with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the District to update
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
 *         description: District updated successfully
 *       "404":
 *         description: District not found
 *       "500":
 *         description: Internal server error
 */
District.put("/updateDistrict/:id", updateDistrict);

module.exports = { District };
