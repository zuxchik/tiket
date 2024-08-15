const { Router } = require("express");
const bookingRouter = Router();
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
} = require("../booking/booking.Controller");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: API endpoints for managing bookings
 */

/**
 * @swagger
 * /bookingRouter/create:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     description: Create a new booking with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               cart_id:
 *                 type: string
 *               status_id:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: string
 *               delivery_method_id:
 *                 type: string
 *               discount_coupon_id:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Booking created successfully
 *       "500":
 *         description: Internal server error
 */
bookingRouter.post("/create", createBooking);

/**
 * @swagger
 * /bookingRouter/getBookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     description: Retrieve a list of all bookings
 *     responses:
 *       "200":
 *         description: A successful response with a list of bookings
 *       "500":
 *         description: Internal server error
 */
bookingRouter.get("/getBookings", getBookings);

/**
 * @swagger
 * /bookingRouter/getBooking/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Booking]
 *     description: Retrieve a booking by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the booking to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the booking details
 *       "404":
 *         description: Booking not found
 *       "500":
 *         description: Internal server error
 */
bookingRouter.get("/getBooking/:id", getBookingById);

/**
 * @swagger
 * /bookingRouter/updateBooking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Booking]
 *     description: Update a booking with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the booking to update
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
 *               cart_id:
 *                 type: string
 *               status_id:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: string
 *               delivery_method_id:
 *                 type: string
 *               discount_coupon_id:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Booking updated successfully
 *       "404":
 *         description: Booking not found
 *       "500":
 *         description: Internal server error
 */
bookingRouter.put("/updateBooking/:id", updateBooking);

module.exports = { bookingRouter };
