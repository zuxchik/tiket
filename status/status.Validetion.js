const Joi = require("joi");

const statusValidation = new Joi.object({
    status: Joi.string().required()
});

module.exports = { statusValidation };
