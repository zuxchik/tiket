const { Router } = require("express");
const seatRouter = Router();

const { getSeat, create_Seat, getSeatById, updateSeat } = require("../seat/seat.Controller");

const { seatValidation } = require("../Admin/Admin.valideion.Schema")

const ValidateSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};


/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: API endpoints for managing seats
 */

/**
 * @swagger
 * /seatRouter/create_Seat:
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
 *              sector_id:
 *               type: string
 *              row_number:
 *               type: number
 *              number:
 *               type: string
 *              venue_id:
 *               type: string
 *              seat_type_id:
 *               type: string
 *     responses:
 *       "201":
 *         description: Seat created successfully
 *       "500":
 *         description: Internal server error
 */
seatRouter.post("/create_Seat", ValidateSchema(seatValidation), create_Seat);

/**
 * @swagger
 * /seatRouter/getSeats:
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
 * /seatRouter/getSeat/{id}:
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
 * /seatRouter/updateSeat/{id}:
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
 *              sector_id:
 *               type: string
 *              row_number:
 *               type: number
 *              number:
 *               type: string
 *              venue_id:
 *               type: string
 *              seat_type_id:
 *               type: string
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
