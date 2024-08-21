const { Router } = require("express");
const DiscauntRuote = Router();

const {
    createDiscaunt,
    getDiscaunt,
    getDiscauntById,
    updateDiscaunt
} = require("../discount/discaunt.Controller");

const { discauntValidation } = require("../Admin/Admin.valideion.Schema")

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
 *   name: Discaunt
 *   description: API endpoints for managing Discaunt
 */

/**
 * @swagger
 * /DiscauntRuote/createDiscaunt:
 *   post:
 *     summary: Create a new Discaunt
 *     tags: [Discaunt]
 *     description: Create a new Discaunt with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *              finish_data:
 *                type: date
 *              discaunt_id:
 *                type: string
 *     responses:
 *       "201":
 *         description: Discaunt created successfully
 *       "500":
 *         description: Internal server error
 */
DiscauntRuote.post("/createDiscaunt", ValidateSchema(discauntValidation), createDiscaunt);

/**
 * @swagger
 * /Discaunt/getDiscaunt:
 *   get:
 *     summary: Get all Discaunts
 *     tags: [Discaunt]
 *     description: Retrieve a list of all Discaunts
 *     responses:
 *       "200":
 *         description: A successful response with a list of Discaunts
 *       "500":
 *         description: Internal server error
 */
DiscauntRuote.get("/getDiscaunt", getDiscaunt);

/**
 * @swagger
 * /DiscauntRuote/getDiscauntById/{id}:
 *   get:
 *     summary: Get a Discaunt by ID
 *     tags: [Discaunt]
 *     description: Retrieve a Discaunt by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Discaunt to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the Discaunt details
 *       "404":
 *         description: Discaunt not found
 *       "500":
 *         description: Internal server error
 */
DiscauntRuote.get("/getDiscauntById/:id", getDiscauntById);

/**
 * @swagger
 * /DiscauntRuote/updateDiscaunt/{id}:
 *   put:
 *     summary: Update a Discaunt by ID
 *     tags: [Discaunt]
 *     description: Update a Discaunt with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Discaunt to update
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
 *              finish_data:
 *                type: date
 *              discaunt_id:
 *                type: number
 *
 *     responses:
 *       "200":
 *         description: Discaunt updated successfully
 *       "404":
 *         description: Discaunt not found
 *       "500":
 *         description: Internal server error
 */
DiscauntRuote.put("/updateDiscaunt/:id", updateDiscaunt);

module.exports = { DiscauntRuote };
