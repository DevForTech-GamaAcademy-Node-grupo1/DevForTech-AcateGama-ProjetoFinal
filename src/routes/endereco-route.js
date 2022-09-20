const express = require('express');
const router = express.Router();
const controller = require('../controllers/endereco-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', cliehteAuth, controller.create);

router.put('/:id', cliehteAuth, controller.update);

router.delete('/:id', cliehteAuth, controller.delete);

router.get('/:id', cliehteAuth, controller.selectById);

router.get('/cliente/:id', cliehteAuth, controller.selectByClienteId);

router.get('/', adminAuth, controller.selectAll);

module.exports = router;