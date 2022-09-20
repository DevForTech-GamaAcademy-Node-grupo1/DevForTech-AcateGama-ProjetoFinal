const pedidos_repository = require('../repositories/pedidos-repository');

async function createPedidos(pedidos) {
  if (pedidos_repository.getPedidosById(pedidos.id)) {
    console.log('pedidos já existe');
    return;
  }
  pedidos_repository.createPedidos(pedidos);
}

async function deletePedidos(id) {
  if (pedidos_repository.getPedidosById(id)) {
    pedidos_repository.deletePedidos(id);
    return;
  }
  console.log('pedidos não encontrado');
}

async function findAllPedidos() {
  let pedidos = pedidos_repository.getAllPedidos();
  console.log(pedidos);
  return
}

async function findPedidosById(id) {
  let pedidos = pedidos_repository.getPedidosById(id);
  if (pedidos) {
    console.log('pedidos encontrado');
    return;
  }
  console.log('pedidos não encontrado');
}

async function findPedidosByClienteId(id) {
  let pedidos = pedidos_repository.getPedidosByClienteId(id);
  if (pedidos) {
    console.log('pedidos encontrado');
    return;
  }
  console.log('pedidos não encontrado');
}

async function findPedidosByPedidoId(id) {
  let pedidos = pedidos_repository.getPedidosByPedidoId(id);
  if (pedidos) {
    console.log('pedidos encontrado');
    return;
  }
  console.log('pedidos não encontrado');
}

async function updatePedidos(pedidos) {
  pedidos_repository.updatePedidos(pedidos);
}

module.exports = pedidos_repository;