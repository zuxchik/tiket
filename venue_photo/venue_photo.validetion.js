const Joi = require("joi");

const venuePhotoValidation = new Joi.object({
    venue_id: Joi.string(),
    url: Joi.string().required()
});

module.exports = { venuePhotoValidation };
