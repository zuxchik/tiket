const Joi = require("joi");

const seatValidation = new Joi.object({
    sector_id: Joi.string().required(),
    row_number: Joi.number().required(),
    number: Joi.string().required(),
    venue_id: Joi.string().required(),
    seat_type_id: Joi.string()
});

module.exports = { seatValidation };
