const { Router } = require("express");
const languageRouter = Router();
const {
  createLanguage,
  getLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage
} = require("../lenguage/language.Controler");


/**
 * @swagger
 * tags:
 *   name: Language
 *   description: API endpoints for managing languages
 */

/**
 * @swagger
 * /languages:
 *   post:
 *     summary: Create a new language
 *     tags: [Language]
 *     description: Create a new language with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                language:
 *                  type: string
 *                description:
 *                  type: string
 *     responses:
 *       "201":
 *         description: Language created successfully
 *       "500":
 *         description: Internal server error
 */
languageRouter.post("/languages", createLanguage);

/**
 * @swagger
 * /languages:
 *   get:
 *     summary: Get all languages
 *     tags: [Language]
 *     description: Retrieve a list of all languages
 *     responses:
 *       "200":
 *         description: A successful response with a list of languages
 *       "500":
 *         description: Internal server error
 */
languageRouter.get("/getLanguages", getLanguages);

/**
 * @swagger
 * /languages/{id}:
 *   get:
 *     summary: Get a language by ID
 *     tags: [Language]
 *     description: Retrieve a language by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the language to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the language details
 *       "404":
 *         description: Language not found
 *       "500":
 *         description: Internal server error
 */
languageRouter.get("/getLanguageById/:id", getLanguageById);

/**
 * @swagger
 * /languages/{id}:
 *   put:
 *     summary: Update a language by ID
 *     tags: [Language]
 *     description: Update a language with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the language to update
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
 *                language:
 *                  type: string
 *                description:
 *                  type: string
 *     responses:
 *       "200":
 *         description: Language updated successfully
 *       "404":
 *         description: Language not found
 *       "500":
 *         description: Internal server error
 */
languageRouter.put("/updateLanguage/:id", updateLanguage);

/**
 * @swagger
 * /languages/{id}:
 *   delete:
 *     summary: Delete a language by ID
 *     tags: [Language]
 *     description: Delete a language with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the language to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Language deleted successfully
 *       "404":
 *         description: Language not found
 *       "500":
 *         description: Internal server error
 */
languageRouter.delete("/deleteLanguage/:id", deleteLanguage);

module.exports = { languageRouter };
