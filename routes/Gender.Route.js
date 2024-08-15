const { Router } = require("express");
const {
  createGender,
  getGenders,
  getGenderById,
  updateGender,
  deleteGender,
} = require("../gender/gender.Controller");

const genderRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: API endpoints for managing genders
 */

/**
 * @swagger
 * /genderRouter/createGender:
 *   post:
 *     summary: Create a new gender
 *     tags: [Gender]
 *     description: Create a new gender with the provided name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                name:
 *                  type: string
 *     responses:
 *       "201":
 *         description: Gender created successfully 
 *       "400":
 *         description: Bad request
 */
genderRouter.post("/createGender", createGender);

/**
 * @swagger
 * /genderRouter/getGenders:
 *   get:
 *     summary: Get all genders
 *     tags: [Gender]
 *     description: Retrieve a list of all genders
 *     responses:
 *       "200":
 *         description: A successful response with a list of genders
 *       "500":
 *         description: Internal server error
 */
genderRouter.get("/getGenders", getGenders);

/**
 * @swagger
 * /genderRouter/getGenderById/{id}:
 *   get:
 *     summary: Get a gender by ID
 *     tags: [Gender]
 *     description: Retrieve a gender by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the gender to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the gender details
 *       "404":
 *         description: Gender not found
 *       "500":
 *         description: Internal server error
 */
genderRouter.get("/getGenderById/:id", getGenderById);

/**
 * @swagger
 * /genderRouter/updateGender/{id}:
 *   put:
 *     summary: Update a gender by ID
 *     tags: [Gender]
 *     description: Update a gender with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the gender to update
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
 *     responses:
 *       "200":
 *         description: Gender updated successfully
 *       "404":
 *         description: Gender not found
 *       "500":
 *         description: Internal server error
 */
genderRouter.put("updateGender/:id", updateGender);

/**
 * @swagger
 * /genderRouter/deletdeleteGender/{id}:
 *   delete:
 *     summary: Delete a gender by ID
 *     tags: [Gender]
 *     description: Delete a gender with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the gender to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Gender deleted successfully
 *       "404":
 *         description: Gender not found
 *       "500":
 *         description: Internal server error
 */
genderRouter.delete("/deletdeleteGender/:id", deleteGender);

module.exports = { genderRouter };
