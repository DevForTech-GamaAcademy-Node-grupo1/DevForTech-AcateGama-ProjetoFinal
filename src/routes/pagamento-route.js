const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamento-controller');

router.post('/', controller.create);

router.get('/', controller.selectAll);

router.get('/id/:id', controller.selectById);

router.put('/:id', controller.updateById);

router.delete('/id/:id', controller.deleteById);


module.exports = router;