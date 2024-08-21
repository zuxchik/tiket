const Joi = require("joi");

const CustomerCardValidation = new Joi.object({
    customer_id: Joi.string(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    number: Joi.string().required(),
    year: Joi.string().required(),
    month: Joi.string().required(),
    is_active: Joi.boolean().required(),
    is_main: Joi.boolean().required()
});

module.exports = { CustomerCardValidation };
