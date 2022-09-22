const { Pedido, Pedidos, Produtos } = require('../database/models/index');

exports.getById = async (id) => {
  let pedido = await Pedido.findByPk(id);
  if (!pedido) {
    throw { message: 'Pedido não encontrado' };
  }
  return pedido;
}

exports.getAll = async () => {
  let pedidos = await Pedido.findAll();
  return pedidos;
}

exports.create = async (pedidoJson, produto, clienteId) => {
  let pedido = await Pedido.create({
    valor_total: pedidoJson.valor_total,
    descricao: pedidoJson.descricao,
    status_geral: pedidoJson.status_geral,
    enderecoId: pedidoJson.enderecoId
  });

  await Produtos.create({
    pedidoId: pedido.id,
    produtoId: produto.id,
    quantidade: produto.quantidade
  });

  await Pedidos.create({
    pedidoId: pedido.id,
    clienteId: clienteId,
  });
}

exports.updatePedido = async (pedidoToUpdate) => {
  let pedido = await Pedido.findByPk(pedidoToUpdate.id);
  await pedido.update(pedidoToUpdate);
}

exports.deleteById = async (id) => {
  let pedido = await Pedido.findByPk(id);
  if (!pedido) {
    throw { message: 'Pedido não encontrado' };
  }
  Pedido.destroy({ where: { id: id } });
}