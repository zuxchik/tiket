const Joi = require("joi");

const bookingValidation = new Joi.object({
    cart_id: Joi.string().required(),
    createdAt: Joi.date().required(),
    finished: Joi.string().required(),
    payment_method_id: Joi.string().required(),
    delivery_method_id: Joi.string().required(),
    discount_coupon_id: Joi.string().required(),
    status_id: Joi.string().required()
});

module.exports = { bookingValidation };
