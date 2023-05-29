const express = require('express');
const pedidosController = require('../controllers/pedidosController');

const router = express.Router();

router.get('/pedidos', pedidosController.index);
router.get('/create', pedidosController.create);
router.post('/create', pedidosController.store);

module.exports = router;