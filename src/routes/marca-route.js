const express = require('express');
const router = express.Router();
const controller = require('../controllers/marca-controller');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', adminAuth, controller.create);

router.put('/:id', adminAuth, controller.updateById);

router.delete('/id/:id', adminAuth, controller.deleteById);

router.delete('/nome/:nome', adminAuth, controller.deleteByName);

router.get('/id/:id', adminAuth, controller.selectById);

router.get('/nome/:nome', adminAuth, controller.selectByName);

router.get('/', adminAuth, controller.selectAll);

module.exports = router;