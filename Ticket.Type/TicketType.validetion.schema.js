const Joi = require("joi");

const ticket_typeValidation = new Joi.object({
    color: Joi.string().required(),
    name: Joi.string().required(),
    ticket_id: Joi.string()
});

module.exports = { ticket_typeValidation };
