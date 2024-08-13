const { Router } = require("express");
const SectorRoute = Router();
const {
    create_Sector,
    getSector,
    getSectorById,
    updateSector,
} = require("../Sector/Sector.Controller");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: API endpoints for managing Sectors
 */

/**
 * @swagger
 * /SectorRoute/create_Sector:
 *   post:
 *     summary: Create a new Sector
 *     tags: [Sector]
 *     description: Create a new Sector with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                sector_name:
 *                  type: string
 *     responses:
 *       "201":
 *         description: Sector created successfully
 *       "500":
 *         description: Internal server error
 */
SectorRoute.post("/create_Sector", create_Sector);

/**
 * @swagger
 * /SectorRoute/getSector:
 *   get:
 *     summary: Get all Sector
 *     tags: [Sector]
 *     description: Retrieve a list of all Sector
 *     responses:
 *       "200":
 *         description: A successful response with a list of Sector
 *       "500":
 *         description: Internal server error
 */
SectorRoute.get("/getSector", getSector);

/**
 * @swagger
 * /SectorRoute/getsectorById/{id}:
 *   get:
 *     summary: Get an sector by ID
 *     tags: [Sector]
 *     description: Retrieve an sector by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the sector to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the sector details
 *       "404":
 *         description: sector not found
 *       "500":
 *         description: Internal server error
 */
SectorRoute.get("/getsectorById/:id", getSectorById);

/**
 * @swagger 
 * /SectorRoute/updateSector/{id}:
 *   put:
 *     summary: Update an Sector by ID
 *     tags: [Sector]
 *     description: Update an Sector with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Sector to update
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
 *                sector_name:
 *                  type: string
 *     responses:
 *       "200":
 *         description: Sector updated successfully
 *       "404":
 *         description: Sector not found
 *       "500":
 *         description: Internal server error
 */
SectorRoute.put("/updateSector/:id", updateSector);
// properties
// |
// L-------  mana buyerni yam ozgartirish kerak
module.exports = { SectorRoute };
