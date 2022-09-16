const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');

router.post('/', controller.create);

router.put('/:id', controller.updateById);

router.delete('/id/:id', controller.deleteById);

router.delete('/nome/:nome', controller.deleteByName);

router.get('/id/:id', controller.selectById);

router.get('/nome/:nome', controller.selectByName);

router.get('/', controller.selectAll);

router.get('/email/:email', controller.electByEmail);

router.get('/cpf/:cpf', controller.selectByCPF);

module.exports = router;