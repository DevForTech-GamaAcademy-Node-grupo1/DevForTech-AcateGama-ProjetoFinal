const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', cliehteAuth, controller.create);

router.put('/:id', cliehteAuth, controller.updateById);

router.delete('/id/:id', cliehteAuth, controller.deleteById);

router.get('/id/:id', cliehteAuth, controller.selectById);

router.get('/', adminAuth, controller.selectAll);

module.exports = router;