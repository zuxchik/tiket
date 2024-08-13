const { Router } = require("express");
const humanCategoryRouter = Router();
const {
  getHumanCategoryById,
  updateHumanCategory,
  create_HumanCategory,
  getHumanCategory,
} = require("../human_category/human_category.Cotroller");

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: API endpoints for managing human categories
 */

/**
 * @swagger
 * /human_category/create:
 *   post:
 *     summary: Create a new human category
 *     tags: [HumanCategory]
 *     description: Create a new human category with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                type: string
 *               start_age:
 *                type: number
 *               finish_age:
 *                type: number
 *               gender_id:
 *                type: string
 *     responses:
 *       "201":
 *         description: Human category created successfully
 *       "500":
 *         description: Internal server error
 */
humanCategoryRouter.post("/create", create_HumanCategory);
/**
 * @swagger
 * /human_category/getHumanCategories:
 *   get:
 *     summary: Get all human categories
 *     tags: [HumanCategory]
 *     description: Retrieve a list of all human categories
 *     responses:
 *       "200":
 *         description: A successful response with a list of human categories
 *       "500":
 *         description: Internal server error
 */
humanCategoryRouter.get("/getHumanCategories", getHumanCategory);

/**
 * @swagger
 * /human_category/getHumanCategory/{id}:
 *   get:
 *     summary: Get a human category by ID
 *     tags: [HumanCategory]
 *     description: Retrieve a human category by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the human category to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the human category details
 *       "404":
 *         description: Human category not found
 *       "500":
 *         description: Internal server error
 */
humanCategoryRouter.get("/getHumanCategoryById/:id", getHumanCategoryById);

/**
 * @swagger
 * /human_category/updateHumanCategory/{id}:
 *   put:
 *     summary: Update a human category by ID
 *     tags: [HumanCategory]
 *     description: Update a human category with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the human category to update
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
 *                type: string
 *               start_age:
 *                type: number
 *               finish_age:
 *                type: number
 *               gender_id:
 *                type: string
 *     responses:
 *       "200":
 *         description: Human category updated successfully
 *       "404":
 *         description: Human category not found
 *       "500":
 *         description: Internal server error
 */
humanCategoryRouter.put("/updateHumanCategory/:id", updateHumanCategory);

module.exports = { humanCategoryRouter };
