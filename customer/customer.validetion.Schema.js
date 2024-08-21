const Joi = require("joi");

const customerValidation = new Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    hashed_password: Joi.string().required(),
    birth_date: Joi.date().required(),
    email: Joi.string().required(),
    gender: Joi.string(),
    lang_id: Joi.string()
});

module.exports = { customerValidation };
