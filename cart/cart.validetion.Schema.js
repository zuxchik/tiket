const Joi = require("joi");

const cartValidation = new Joi.object({
    ticket_id: Joi.string(),
    customer_id: Joi.string(),
    createdAt: Joi.date().required(),
    finishedAt: Joi.date().required(),
    status_id: Joi.string()
});

module.exports = { cartValidation };
