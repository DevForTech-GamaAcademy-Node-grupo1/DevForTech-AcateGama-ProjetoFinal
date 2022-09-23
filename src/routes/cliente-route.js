const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');
const cliehteAuth = require('../middlewares/clienteAuth');
const adminAuth = require('../middlewares/adminAuth');
const { validateCreate, validateUpdate, validateAuthenticate } = require('../validations/clientes/index');
const handleError = require('../middlewares/handleError');

router.post('/', validateCreate, handleError, controller.create);

router.post('/authenticate', validateAuthenticate, handleError, controller.authenticate);

router.put('/', cliehteAuth, validateUpdate, handleError, controller.updateById);

router.get('/id/:id', cliehteAuth, controller.selectById);

router.get('/nome/:nome', cliehteAuth, controller.selectByName);

router.get('/email/:email', cliehteAuth, controller.selectByEmail);

router.get('/cpf/:cpf', cliehteAuth, controller.selectByCPF);

router.get('/', adminAuth, controller.selectAll);

router.get('/logout', controller.logout);

router.delete('/id/:id', adminAuth, controller.deleteById);

router.delete('/email/:email', adminAuth, controller.deleteByEmail);

module.exports = router;