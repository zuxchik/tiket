const Joi = require("joi");

const countryValidation = new Joi.object({
    country: Joi.string().required()
});

module.exports = { countryValidation };
