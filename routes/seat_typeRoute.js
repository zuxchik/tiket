const { Router } = require("express");
const seatTypeRouter = Router();
const {
  create_SeatTypof,
  getSectorType,
  getSeatTypofById,
  updateSeatTypof,
} = require("../seat_type/seat_type.controller");

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: API endpoints for managing seat types
 */

/**
 * @swagger
 * /seatTypeRouter/create_SeatTypof:
 *   post:
 *     summary: Create a new seat type
 *     tags: [SeatType]
 *     description: Create a new seat type with the provided details
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
 *         description: Seat type created successfully
 *       "500":
 *         description: Internal server error
 */
seatTypeRouter.post("/create_SeatTypof", create_SeatTypof);

/**
 * @swagger
 * /seatTypeRouter/getSeatTypes:
 *   get:
 *     summary: Get all seat types
 *     tags: [SeatType]
 *     description: Retrieve a list of all seat types
 *     responses:
 *       "200":
 *         description: A successful response with a list of seat types
 *       "500":
 *         description: Internal server error
 */
seatTypeRouter.get("/getSeatTypes", getSectorType);

/**
 * @swagger
 * /seatTypeRouter/getSeatType/{id}:
 *   get:
 *     summary: Get a seat type by ID
 *     tags: [SeatType]
 *     description: Retrieve a seat type by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the seat type to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the seat type details
 *       "404":
 *         description: Seat type not found
 *       "500":
 *         description: Internal server error
 */
seatTypeRouter.get("/getSeatType/:id", getSeatTypofById);

/**
 * @swagger
 * /seatTypeRouter/updateSeatType/{id}:
 *   put:
 *     summary: Update a seat type by ID
 *     tags: [SeatType]
 *     description: Update a seat type with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the seat type to update
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
 *         description: Seat type updated successfully
 *       "404":
 *         description: Seat type not found
 *       "500":
 *         description: Internal server error
 */
seatTypeRouter.put("/updateSeatType/:id", updateSeatTypof);

module.exports = { seatTypeRouter };
