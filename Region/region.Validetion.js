const Joi = require("joi");

const regionValidation = new Joi.object({
    name: Joi.string().required(),
    postpone: Joi.number().required()
});

module.exports = { regionValidation };
