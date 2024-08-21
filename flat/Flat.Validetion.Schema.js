const Joi = require("joi");

const flatValidation = new Joi.object({
    etaj: Joi.number().required(),
    condition: Joi.string().required()
});

module.exports = { flatValidation };
