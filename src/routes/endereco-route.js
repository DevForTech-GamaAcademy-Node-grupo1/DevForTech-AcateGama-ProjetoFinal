const express = require('express');
const router = express.Router();
const controller = require('../controllers/endereco-controller');
const clienteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');
const handleError = require('../middlewares/handleError');
const { validateCreate, validateUpdate } = require('../validations/enderecos/index');

router.post('/', clienteAuth, validateCreate, handleError, controller.create);

router.put('/:id', clienteAuth, validateUpdate, handleError, controller.update);

router.get('/', adminAuth, controller.selectAll);

router.get('/:id', clienteAuth, controller.selectById);

router.get('/cliente/:id', controller.selectByClienteId);

router.delete('/:id', clienteAuth, controller.delete);

module.exports = router;