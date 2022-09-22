const express = require('express');
const router = express.Router();
const controller = require('../controllers/endereco-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');
const handleError = require('../middlewares/handleError');
const { validateCreate, validateUpdate } = require('../validations/enderecos/index');

router.post('/', controller.create);

router.put('/:id', controller.update);

router.get('/', controller.selectAll);

router.get('/:id', controller.selectById);

router.get('/cliente/:id', controller.selectByClienteId);

router.delete('/:id', controller.delete);

module.exports = router;