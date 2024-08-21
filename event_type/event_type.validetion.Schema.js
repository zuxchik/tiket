const Joi = require("joi");

const event_typeChikValidation = new Joi.object({
    name: Joi.string().required()
});

module.exports = { event_typeChikValidation };
