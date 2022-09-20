const Pedidos = require('../database/models/Pedidos');

async function getPedidosById(id) {
    let pedidos = await Pedidos.findByPk(id);
    return JSON.stringify(pedidos);
  }

  async function getPedidosByClienteId(clienteId) {
    let pedidos = await Pedidos.findOne(clienteId);
    return JSON.stringify(pedidos);
  }

  async function getPedidosByPedidoId(pedidoId) {
    let pedidos = await Pedidos.findOne(pedidoId);
    return JSON.stringify(pedidos);
  }
  
  
  async function getAllPedidos() {
    let pedidos = await Pedidos.findAll();
    return JSON.stringify(pedidos);
  }
  
  async function createPedidos(pedidos) {
    await Pedidos.create({
      pedidos_clienteId: pedidos.pedidos_clienteId,
      pedidos_pedidosId: pedidos.pedidos_pedidosId
    });
  }
  
  async function updatePedidos(pedidosToUpdate) {
    let pedidos = await Pedidos.findByPk(pedidosToUpdate.id);
    pedidos = pedidosToUpdate;
    await pedidos.save();
  }
  
  async function deletePedidos(id) {
    let pedidos = await Pedidos.findByPk(id);
    await pedidos.destroy();
  }
  
  module.exports = {
    getPedidosById,
    getPedidosByClienteId,
    getPedidosByPedidoId,
    createPedidos,
    updatePedidos,
    deletePedidos,
    getAllPedidos
  }