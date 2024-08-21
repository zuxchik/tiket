const Joi = require("joi");

const sectorValidation = new Joi.object({
    sector_name: Joi.string().required()
});

module.exports = { sectorValidation };
