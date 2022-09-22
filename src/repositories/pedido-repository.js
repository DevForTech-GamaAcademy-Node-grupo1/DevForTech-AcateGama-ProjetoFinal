const { Pedido, Pedidos } = require('../database/models/index');

exports.getById = async (id) => {
  let pedido = await Pedido.findByPk(id);
  return JSON.stringify(pedido);
}

exports.getAll = async () => {
  let pedidos = await Pedido.findAll();
  return JSON.stringify(pedidos);
}

exports.create = async (pedido) => {
  Pedido.create({
    valor_total: pedido.valor_total,
    descricao: pedido.descricao,
    status_geral: pedido.status_geral,
    enderecoId: pedido.enderecoId
  })
    .then(pedido => {
      Pedidos.create({
        pedidoId: pedido.id,
        produtoId: produto.id,
        quantidade: produto.quantidade
      })
    })
    .catch(e => {
      console.log(e);
    });
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