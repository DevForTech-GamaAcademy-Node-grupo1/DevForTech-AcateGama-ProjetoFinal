const Pedido = require('../database/models/Pedido');

async function getPedidoById(id) {
    let pedido = await Pedido.findByPk(id);
    return JSON.stringify(pedido);
  }
  
  async function getPedidoByName(nome) {
    let pedido = await Pedido.findOne({ where: { nome: nome } });
    console.log(JSON.stringify(pedido));
    return JSON.stringify(pedido);
  }
  
  async function getAllPedido() {
    let pedidos = await Pedido.findAll();
    return JSON.stringify(pedidos);
  }
  
  async function createPedido(pedido) {
    await Pedido.create({
      nome: pedido.nome,
      descricao: pedido.descricao
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
    getPedidoByName,
    createPedido,
    updatePedido,
    deletePedido,
    getAllPedido
  }