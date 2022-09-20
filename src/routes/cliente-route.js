const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', controller.create);

router.put('/:id', cliehteAuth, controller.updateById);

router.delete('/id/:id', cliehteAuth, controller.deleteById);

router.delete('/email/:email', cliehteAuth, controller.deleteByEmail);

router.get('/id/:id', cliehteAuth, controller.selectById);

router.get('/nome/:nome', cliehteAuth, controller.selectByName);

router.get('/', adminAuth, controller.selectAll);

router.get('/email/:email', cliehteAuth, controller.selectByEmail);

router.get('/cpf/:cpf', cliehteAuth, controller.selectByCPF);

router.post('/authenticate', controller.authenticate);

module.exports = router;