const { Router } = require("express");
const venuePhotoRouter = Router();
const {
  getVenuePhotoById,
  updateVenuePhoto,
  create_VenuePhoto,
  getVenuePhoto,
} = require("../venue_photo/venue_photo.controller");

const { venuePhotoValidation } = require("../Admin/Admin.valideion.Schema")

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
 *   name: VenuePhoto
 *   description: API endpoints for managing venue photos
 */

/**
 * @swagger
 * /venuePhotoRouter/create_VenuePhoto:
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
 *               venue_id:
 *                 type: string
 *               url:
 *                type: string
 *     responses:
 *       "201":
 *         description: Venue photo uploaded successfully
 *       "500":
 *         description: Internal server error
 */
venuePhotoRouter.post("/create_VenuePhoto", ValidateSchema(venuePhotoValidation), create_VenuePhoto);

/**
 * @swagger
 * /venuePhotoRouter/getVenuePhotos:
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
 * /venuePhotoRouter/getVenuePhoto/{id}:
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
 * /venuePhotoRouter/updateVenuePhoto/{id}:
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
