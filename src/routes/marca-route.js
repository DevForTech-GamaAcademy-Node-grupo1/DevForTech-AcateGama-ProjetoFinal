const express = require('express');
const router = express.Router();
const controller = require('../controllers/marca-controller');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', controller.create);

router.put('/:id', controller.updateById);

router.delete('/id/:id', controller.deleteById);

router.delete('/nome/:nome', controller.deleteByName);

router.get('/id/:id', controller.selectById);

router.get('/nome/:nome', controller.selectByName);

router.get('/', controller.selectAll);

module.exports = router;