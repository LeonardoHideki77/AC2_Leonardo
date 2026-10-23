const express = require('express');
const controller = require('../controllers/clientesController');
const router = express.Router();

router.get('/', controller.listarClientes);
router.get('/cidade/:cidade', controller.listarPorCidade);
router.get('/:id/pedidos', controller.listarPedidos);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizarCliente);
router.post('/:id/pedidos', controller.adicionarPedido);
router.delete('/:id', controller.removerCliente);

module.exports = router;
