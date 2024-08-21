const Joi = require("joi");

const deliveryValidation = new Joi.object({
    name: Joi.string.required()
});

module.exports = { deliveryValidation };
