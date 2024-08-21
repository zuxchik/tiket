const Joi = require("joi");

const genderValidation = new Joi.object({
    name: Joi.string().required()
});

module.exports = { genderValidation };
