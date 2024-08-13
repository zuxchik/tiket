const { Router } = require("express");
const seatRouter = Router();

const { getSeat, create_Seat, getSeatById, updateSeat } = require("../seat/seat.Controller");

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: API endpoints for managing seats
 */

/**
 * @swagger
 * /seat/create:
 *   post:
 *     summary: Create a new seat
 *     tags: [Seat]
 *     description: Create a new seat with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               row:
 *                 type: string
 *               number:
 *                 type: string
 *               typeId:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Seat created successfully
 *       "500":
 *         description: Internal server error
 */
seatRouter.post("/create", create_Seat);

/**
 * @swagger
 * /seat/getSeats:
 *   get:
 *     summary: Get all seats
 *     tags: [Seat]
 *     description: Retrieve a list of all seats
 *     responses:
 *       "200":
 *         description: A successful response with a list of seats
 *       "500":
 *         description: Internal server error
 */
seatRouter.get("/getSeats", getSeat);

/**
 * @swagger
 * /seat/getSeat/{id}:
 *   get:
 *     summary: Get a seat by ID
 *     tags: [Seat]
 *     description: Retrieve a seat by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the seat to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the seat details
 *       "404":
 *         description: Seat not found
 *       "500":
 *         description: Internal server error
 */
seatRouter.get("/getSeat/:id", getSeatById);

/**
 * @swagger
 * /seat/updateSeat/{id}:
 *   put:
 *     summary: Update a seat by ID
 *     tags: [Seat]
 *     description: Update a seat with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the seat to update
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
 *               row:
 *                 type: string
 *               number:
 *                 type: string
 *               typeId:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Seat updated successfully
 *       "404":
 *         description: Seat not found
 *       "500":
 *         description: Internal server error
 */
seatRouter.put("/updateSeat/:id", updateSeat);

module.exports = { seatRouter };
