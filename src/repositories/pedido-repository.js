const Pedido = require('../database/models/Pedido');

async function getPedidoById(id) {
    let pedido = await Pedido.findByPk(id);
    return JSON.stringify(pedido);
  }
  
  async function getAllPedido() {
    let pedidos = await Pedido.findAll();
    return JSON.stringify(pedidos);
  }
  
  async function createPedido(pedido) {
    await Pedido.create({
      valor_total: pedido.valor_total,
      descricao: pedido.descricao,
      status_geral: pedido.status_geral
    });
  }
  
  async function updatePedido(pedidoToUpdate) {
    let pedido = await Pedido.findByPk(pedidoToUpdate.id);
    pedido = pedidoToUpdate;
    await pedido.save();
  }
  
  async function deletePedido(id) {
    let pedido = await Pedido.findByPk(id);
    await pedido.destroy();
  }
  
  module.exports = {
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido,
    getAllPedido
  }