const { Pedido, Pedidos, Produtos } = require('../database/models/index');

exports.getById = async (id) => {
  let pedido = await Pedido.findByPk(id);
  return JSON.stringify(pedido);
}

exports.getAll = async () => {
  let pedidos = await Pedido.findAll();
  return JSON.stringify(pedidos);
}

exports.create = async (pedido, produto, clienteId) => {
  let obj = await Pedido.create({
    valor_total: pedido.valor_total,
    descricao: pedido.descricao,
    status_geral: pedido.status_geral,
    enderecoId: pedido.enderecoId
  });
  console.log(obj);
  console.log(produto);
  console.log(produto.id);
  await Produtos.create({
    pedidoId: obj.id,
    produtoId: produto.id,
    quantidade: produto.quantidade
  }).then(x => {
    console.log(x)
  })
    .catch(e => {
    console.log(e)
  })
  /*
  await Pedidos.create({
    pedidoId: obj.id,
    clienteId: clienteId
  });*/
}

exports.updatePedido = async (pedidoToUpdate) => {
  let pedido = await Pedido.findByPk(pedidoToUpdate.id);
  await pedido.update(pedidoToUpdate);
}

exports.deleteById = async (id) => {
  let pedido = await Pedido.findByPk(id);
  if (!pedido) {
    throw 'Pedido não encontrado';
  }
  Pedido.destroy({ where: { id: id } });
}