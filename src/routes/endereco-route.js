const express = require('express');
const router = express.Router();
const controller = require('../controllers/endereco-controller');

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

router.get('/:id', controller.selectById);

router.get('/cliente/:id', controller.selectByClienteId);

router.get('/', controller.selectAll);

module.exports = router;