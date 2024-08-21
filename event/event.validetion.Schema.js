const Joi = require("joi");

const eventValidation = new Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().required(),
    start_date: Joi.date().required(),
    start_time: Joi.date().required(),
    finish_date: Joi.date().required(),
    finish_time: Joi.date().required(),
    info: Joi.string().required(),
    event_type_id: Joi.string(),
    human_category_id: Joi.string(),
    venue_id: Joi.string(),
    lang_id: Joi.string(),
    release_date: Joi.date().required()
});

module.exports = { eventValidation };
