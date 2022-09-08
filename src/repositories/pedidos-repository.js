const Pedidos = require('../database/models/Pedidos');

async function getPedidosById(id) {
    let pedidos = await Pedidos.findByPk(id);
    return JSON.stringify(pedidos);
  }
  
  async function getPedidosByName(nome) {
    let pedidos = await Pedidos.findOne({ where: { nome: nome } });
    console.log(JSON.stringify(pedidos));
    return JSON.stringify(pedidos);
  }
  
  async function getAllPedidos() {
    let pedidos = await Pedidos.findAll();
    return JSON.stringify(pedidos);
  }
  
  async function createPedidos(pedidos) {
    await Pedidos.create({
      nome: pedidos.nome,
      descricao: pedidos.descricao
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
    getPedidosByName,
    createPedidos,
    updatePedidos,
    deletePedidos,
    getAllPedidos
  }