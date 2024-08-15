const { Router } = require("express");
const StatusRouter = Router();
const {
    createStatus,
    getStatus,
    getStatusById,
    updateStatus,
} = require("../status/status.Controller");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: API endpoints for managing Statuss
 */

/**
 * @swagger
 * /StatusRouter/createStatus:
 *   post:
 *     summary: Create a new Status
 *     tags: [Status]
 *     description: Create a new Status with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                status:
 *                  type: string
 *     responses:
 *       "201":
 *         description: Status created successfully
 *       "500":
 *         description: Internal server error
 */
StatusRouter.post("/createStatus", createStatus);

/**
 * @swagger
 * /StatusRouter/getStatus:
 *   get:
 *     summary: Get all Statuss
 *     tags: [Status]
 *     description: Retrieve a list of all Statuss
 *     responses:
 *       "200":
 *         description: A successful response with a list of Statuss
 *       "500":
 *         description: Internal server error
 */
StatusRouter.get("/getStatus", getStatus);

/**
 * @swagger
 * /StatusRouter/getStatusById/{id}:
 *   get:
 *     summary: Get an Status by ID
 *     tags: [Status]
 *     description: Retrieve an Status by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Status to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Status details
 *       "404":
 *         description: Status not found
 *       "500":
 *         description: Internal server error
 */
StatusRouter.get("/getStatusById/:id", getStatusById);

/**
 * @swagger
 * /StatusRouter/updateStatus/{id}:
 *   put:
 *     summary: Update an Status by ID
 *     tags: [Status]
 *     description: Update an Status with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Status to update
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
 *                status:
 *                  type: string
 *     responses:
 *       "200":
 *         description: Status updated successfully
 *       "404":
 *         description: Status not found
 *       "500":
 *         description: Internal server error
 */
StatusRouter.put("/updateStatus/:id", updateStatus);

module.exports = { StatusRouter };
