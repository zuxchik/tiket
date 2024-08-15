const Joi = require("joi");

const AdminValidation = new Joi.object({
  name: Joi.string().required().min(2).max(30),
  login: Joi.string().required().min(3).max(30),
  hashed_password: Joi.string().min(4).max(30),
  is_active: Joi.boolean().required(),
  is_creator: Joi.boolean().required(),
});

const AdminLogin= new Joi.object({
  name:Joi.string().required().min(2).max(50),
  hashed_password:Joi.string().required().min(2).max(50),
})

module.exports = {AdminValidation,AdminLogin};
