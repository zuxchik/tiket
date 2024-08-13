const { Router } = require("express");
const RegionRouter = Router();
const {
    createRegion,
    getRegion,
    getRegionById,
    updateRegion,
} = require("../Region/region.Controller.js")

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: API endpoints for managing Regions
 */

/**
 * @swagger
 * /RegionRouter/createRegion:
 *   post:
 *     summary: Create a new Region
 *     tags: [Region]
 *     description: Create a new Region with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                name:
 *                  type: string
 *                postpone:
 *                  type: Number
 *     responses:
 *       "201":
 *         description: Region created successfully
 *       "500":
 *         description: Internal server error
 */
RegionRouter.post("/createRegion", createRegion);

/**
 * @swagger
 * /RegionRouter/getRegion:
 *   get:
 *     summary: Get all Regions
 *     tags: [Region]
 *     description: Retrieve a list of all Regions
 *     responses:
 *       "200":
 *         description: A successful response with a list of Regions
 *       "500":
 *         description: Internal server error
 */
RegionRouter.get("/getRegion", getRegion);

/**
 * @swagger
 * /RegionRouter/getRegionById/{id}:
 *   get:
 *     summary: Get an Region by ID
 *     tags: [Region]
 *     description: Retrieve an Region by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Region to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Region details
 *       "404":
 *         description: Region not found
 *       "500":
 *         description: Internal server error
 */
RegionRouter.get("/getRegionById/:id", getRegionById);

/**
 * @swagger
 * /RegionRouter/updateRegion/{id}:
 *   put:
 *     summary: Update an Region by ID
 *     tags: [Region]
 *     description: Update an Region with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Region to update
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
 *                name:
 *                  type: string
 *                postpone:
 *                  type: Number
 *     responses:
 *       "200":
 *         description: Region updated successfully
 *       "404":
 *         description: Region not found
 *       "500":
 *         description: Internal server error
 */
RegionRouter.put("/updateRegion/:id", updateRegion);

module.exports = { RegionRouter };
