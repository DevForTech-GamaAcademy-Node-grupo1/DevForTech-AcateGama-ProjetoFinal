const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', cliehteAuth, controller.create);

router.put('/:id', adminAuth, controller.updateById);

router.delete('/id/:id', adminAuth, controller.deleteById);

router.get('/id/:id', cliehteAuth, controller.selectById);

router.get('/', adminAuth, controller.selectAll);

module.exports = router;