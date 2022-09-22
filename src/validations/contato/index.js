const { validate, Joi } = require('express-validation');

exports.validateCreate = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
    nome: Joi.string().required(),
    cpf: Joi.string().regex(/^ [0 - 9]{ 11}$ /).required()
  })
});

exports.validateUpdate = validate({
  body: Joi.object({
    email: Joi.string().email().optional(),
    senha: Joi.string().optional(),
    nome: Joi.string().optional(),
    cpf: Joi.string().regex(/^[0-9]{11}$/).optional()
  })
});