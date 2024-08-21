const Joi = require("joi");

const ticketValidation = new Joi.object({
    event_id: Joi.string(),
    seat_id: Joi.string(),
    price: Joi.number().required(),
    service_fee: Joi.number().required(),
    status_id: Joi.string(),
    ticket_type: Joi.number().required(),
});

module.exports = { ticketValidation };
