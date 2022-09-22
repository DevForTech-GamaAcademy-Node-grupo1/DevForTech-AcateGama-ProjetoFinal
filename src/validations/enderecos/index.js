const { validate, Joi } = require('express-validation');

exports.validateCreate = validate({
  body: Joi.object({
    rua: Joi.string().required(),
    numero: Joi.string().required(),
    bairro: Joi.string().required(),
    complemento: Joi.string().optional(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    cep: Joi.string().regex(/^[0-9]{11}$/).required()
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