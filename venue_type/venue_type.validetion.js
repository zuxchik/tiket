const Joi = require("joi");

const venueTypeValidation = new Joi.object({
    name: Joi.string().required()
});

module.exports = { venueTypeValidation };
