const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', controller.create);

router.put('/:id', controller.updateById);

router.delete('/id/:id', controller.deleteById);

router.get('/id/:id', controller.selectById);

router.get('/', controller.selectAll);

module.exports = router;