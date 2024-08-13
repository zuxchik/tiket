const { Router } = require("express");
const venuePhotoRouter = Router();
const {
  getVenuePhotoById,
  updateVenuePhoto,
  create_VenuePhoto,
  getVenuePhoto,
} = require("../venue_photo/venue_photo.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: API endpoints for managing venue photos
 */

/**
 * @swagger
 * /venue_photo/create:
 *   post:
 *     summary: Upload a new venue photo
 *     tags: [VenuePhoto]
 *     description: Upload a new photo for a venue
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       "201":
 *         description: Venue photo uploaded successfully
 *       "500":
 *         description: Internal server error
 */
venuePhotoRouter.post("/create", create_VenuePhoto);

/**
 * @swagger
 * /venue_photo/getVenuePhotos:
 *   get:
 *     summary: Get all venue photos
 *     tags: [VenuePhoto]
 *     description: Retrieve a list of all venue photos
 *     responses:
 *       "200":
 *         description: A successful response with a list of venue photos
 *       "500":
 *         description: Internal server error
 */
venuePhotoRouter.get("/getVenuePhotos", getVenuePhoto);

/**
 * @swagger
 * /venue_photo/getVenuePhoto/{id}:
 *   get:
 *     summary: Get a venue photo by ID
 *     tags: [VenuePhoto]
 *     description: Retrieve a venue photo by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the venue photo to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the venue photo details
 *       "404":
 *         description: Venue photo not found
 *       "500":
 *         description: Internal server error
 */
venuePhotoRouter.get("/getVenuePhoto/:id", getVenuePhotoById);

/**
 * @swagger
 * /venue_photo/updateVenuePhoto/{id}:
 *   put:
 *     summary: Update a venue photo by ID
 *     tags: [VenuePhoto]
 *     description: Update a venue photo with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the venue photo to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       "200":
 *         description: Venue photo updated successfully
 *       "404":
 *         description: Venue photo not found
 *       "500":
 *         description: Internal server error
 */
venuePhotoRouter.put("/updateVenuePhoto/:id", updateVenuePhoto);

module.exports = { venuePhotoRouter };
