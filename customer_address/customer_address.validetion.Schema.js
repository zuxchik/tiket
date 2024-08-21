const Joi = require("joi");

const customerAddressValidation = new Joi.object({
    customer_id: Joi.string(),
    name: Joi.string().required(),
    country_id: Joi.string(),
    region_id: Joi.string(),
    district_id: Joi.string(),
    street: Joi.string().required(),
    house: Joi.string().required(),
    flat: Joi.string().required(),
    location: Joi.string().required(),
    post_index: Joi.string().required(),
    info: Joi.string().required(),
});

module.exports = { customerAddressValidation };
