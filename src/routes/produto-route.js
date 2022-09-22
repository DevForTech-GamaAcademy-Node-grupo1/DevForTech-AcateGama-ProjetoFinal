const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', controller.create);

router.get('/', controller.selectAll);

router.get('/:id', controller.selectById);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);

module.exports = router;