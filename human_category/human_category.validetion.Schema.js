const Joi = require("joi");

const humanCategoryValidation = new Joi.object({
name: Joi.string().required(),
start_age: Joi.number().required(),
finish_age: Joi.number().required(),
gender_id: Joi.string()
});

module.exports = { humanCategoryValidation };
