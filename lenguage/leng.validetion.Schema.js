const Joi = require("joi");

const languageValidation = new Joi.object({
    language: Joi.string().required(),
    discription: Joi.string().required()
});

module.exports = { languageValidation };
