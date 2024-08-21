const Joi = require("joi");

const venueValidation = new Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    location: Joi.string().required(),
    site: Joi.string().required(),
    phone: Joi.string().required(),
    venue_type_id: Joi.string(),
    schema: Joi.string().required(),
    region_id: Joi.string(),
    district_id: Joi.string()
});

module.exports = { venueValidation };
