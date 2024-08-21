const Joi = require("joi");

const districtValidation = new Joi.object({
    name: Joi.string().required(),
    region_id: Joi.string()
});

module.exports = { districtValidation };
