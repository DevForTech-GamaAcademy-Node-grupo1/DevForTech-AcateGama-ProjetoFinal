const pedido_repository = require('../repositories/pedido-repository');

async function createPedido(pedido) {
  if (pedido_repository.getPedidoByName(pedido.nome)) {
    console.log('pedido já existe');
    return;
  }
  pedido_repository.createPedido(pedido);
}

async function deletePedido(id) {
  if (pedido_repository.getPedidoById(id)) {
    pedido_repository.deletePedido(id);
    return;
  }
  console.log('pedido não encontrado');
}

async function findAllPedido() {
  let pedidos = pedido_repository.getAllPedido();
  console.log(pedidos);
  return
}

async function findPedidoById(id) {
  let pedido = pedido_repository.getPedidoById(id);
  if (pedido) {
    console.log('pedido encontrado');
    return;
  }
  console.log('pedido não encontrado');
}

async function updatePedido(pedido) {
  pedido_repository.updatePedido(pedido);
}

module.exports = pedido_repository;