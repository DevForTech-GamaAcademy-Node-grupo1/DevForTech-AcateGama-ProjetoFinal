const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');
const { validateCreate, validateUpdate, validateAuthenticate } = require('../validations/clientes/index');
const handleError = require('../middlewares/handleError');

router.post('/', controller.create);

router.post('/authenticate', controller.authenticate);

router.put('/:id', controller.updateById);

router.get('/id/:id', controller.selectById);

router.get('/nome/:nome', controller.selectByName);

router.get('/email/:email', controller.selectByEmail);

router.get('/cpf/:cpf', controller.selectByCPF);

router.get('/', controller.selectAll);

router.get('/logout', controller.logout);

router.delete('/id/:id', controller.deleteById);

router.delete('/email/:email', controller.deleteByEmail);

module.exports = router;