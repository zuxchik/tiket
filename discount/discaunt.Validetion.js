const Joi = require("joi");

const discauntValidation = new Joi.object({
    finish_data: Joi.date().required(),
    discaunt: Joi.date().required()
});

module.exports = { discauntValidation };
