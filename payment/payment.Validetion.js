const Joi = require("joi");

const paymentValidation = new Joi.object({
    name: Joi.string().required()
});

module.exports = { paymentValidation };
