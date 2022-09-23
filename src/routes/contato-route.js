const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');
const { validateCreate, validateUpdate } = require('../validations/contato/index');
const handleError = require('../middlewares/handleError');
const clienteAuth = require('../middlewares/clienteAuth');

router.post('/', clienteAuth, validateCreate, handleError, controller.create);

router.put('/:id', clienteAuth, validateUpdate, handleError, controller.updateById);

router.delete('/:id', clienteAuth, controller.deleteById);

router.get('/:id', clienteAuth, controller.selectById);

router.get('/', adminAuth, controller.selectAll);

module.exports = router;