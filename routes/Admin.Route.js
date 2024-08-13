const { Router } = require("express");
const adminRouter = Router();
const {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
} = require("../Admin/Admin.cintroller");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API endpoints for managing admins
 */

/**
 * @swagger
 * /adminRouter/create:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     description: Create a new admin with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                name:
 *                  type: string
 *                login:
 *                  type: string
 *                hashed_password:
 *                  type: string
 *                is_active:
 *                  type: boolean
 *                is_creator:
 *                  type: boolean
 *     responses:
 *       "201":
 *         description: Admin created successfully
 *       "500":
 *         description: Internal server error
 */
adminRouter.post("/create", createAdmin);

/**
 * @swagger
 * /adminRouter/getAdmin:
 *   get:
 *     summary: Get all admins
 *     tags: [Admin]
 *     description: Retrieve a list of all admins
 *     responses:
 *       "200":
 *         description: A successful response with a list of admins
 *       "500":
 *         description: Internal server error
 */
adminRouter.get("/getAdmin", getAdmin);

/**
 * @swagger
 * /adminRouter/getAdmin/{id}:
 *   get:
 *     summary: Get an admin by ID
 *     tags: [Admin]
 *     description: Retrieve an admin by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the admin to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the admin details
 *       "404":
 *         description: Admin not found
 *       "500":
 *         description: Internal server error
 */
adminRouter.get("/getAdmin/:id", getAdminById);

/**
 * @swagger
 * /adminRouter/updateAdmin/{id}:
 *   put:
 *     summary: Update an admin by ID
 *     tags: [Admin]
 *     description: Update an admin with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the admin to update
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
 *                login:
 *                  type: string
 *                hashed_password:
 *                  type: string
 *                is_active:
 *                  type: boolean
 *                is_creator:
 *                  type: boolean
 *     responses:
 *       "200":
 *         description: Admin updated successfully
 *       "404":
 *         description: Admin not found
 *       "500":
 *         description: Internal server error
 */
adminRouter.put("/updateAdmin/:id", updateAdmin);

module.exports = { adminRouter };
