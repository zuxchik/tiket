const Joi = require("joi");

const seatTypeValidation = new Joi.object({
    name: Joi.string().required()
});

module.exports = { seatTypeValidation };
