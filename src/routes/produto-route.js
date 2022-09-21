const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', adminAuth, controller.create);

router.get('/', controller.selectAll);

router.get('/id/:id', controller.selectById);

router.put('/:id', adminAuth, controller.updateById);

router.delete('/id/:id', adminAuth, controller.deleteById);

module.exports = router;