const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', controller.create);

router.put('/:id', cliehteAuth, controller.updateById);

router.delete('/:id', cliehteAuth, controller.deleteById);

router.get('/:id', cliehteAuth, controller.selectById);

router.get('/', cliehteAuth, controller.selectAll);

module.exports = router;