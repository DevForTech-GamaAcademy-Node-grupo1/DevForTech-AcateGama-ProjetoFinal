const Cliente = require('./Cliente');
const Contato = require('./Contato');
const Endereco = require('./Endereco');
const Marca = require('./Marca');
const Pedido = require('./Pedido');
const Produto = require('./Produto');

const Contatos = require('./Contatos');
const Enderecos = require('./Enderecos');
const Favoritos = require('./Favoritos');
const Pedidos = require('./Pedidos');
const Produtos = require('./Produtos');

Pedido.belongsTo(Endereco, {
  foreignKey: 'enderecoId'
});
Produto.belongsTo(Marca, {
  foreignKey: 'marcaId'
});

//Relação cliente x contatos
Cliente.belongsToMany(Contato, {
  through: { model: 'contatos_cliente', unique: false },
  as: 'contatos_clienteId',
  foreignKey: 'clienteId'
});
Contato.belongsToMany(Cliente, {
  through: { model: 'contatos_cliente', unique: false },
  as: 'contatos_contatoId',
  foreignKey: 'contatoId'
});

//Relação cliente x enderecos
Cliente.belongsToMany(Endereco, {
  through: { model: 'enderecos_cliente', unique: false },
  as: 'enderecos_clienteId',
  foreignKey: 'clienteId'
});
Endereco.belongsToMany(Cliente, {
  through: { model: 'enderecos_cliente', unique: false },
  as: 'enderecos_enderecoId',
  foreignKey: 'enderecoId'
});

//Relação cliente x pedidos
Cliente.belongsToMany(Pedido, {
  through: { model: 'pedidos_cliente', unique: false },
  as: 'pedidos_clienteId',
  foreignKey: 'ClienteId'
});
Pedido.belongsToMany(Cliente, {
  through: { model: 'pedidos_cliente', unique: false },
  as: 'pedidos_pedidosId',
  foreignKey: 'PedidoId'
});

//Relação cliente x produtos
Cliente.belongsToMany(Produto, {
  through: { model: 'favoritos', unique: false },
  as: 'favoritos_clienteId',
  foreignKey: 'ClienteId'
});
Produto.belongsToMany(Cliente, {
  through: { model: 'favoritos', unique: false },
  as: 'favoritos_produtoId',
  foreignKey: 'ProdutoId'
});

//Relação pedido x produtos
Pedido.belongsToMany(Produto, {
  through: { model: 'produtos_pedido', unique: false },
  as: 'produtos_pedidoId',
  foreignKey: 'PedidoId'
});
Produto.belongsToMany(Pedido, {
  through: { model: 'produtos_pedido', unique: false },
  as: 'produtos_produtoId',
  foreignKey: 'ProdutoId'
});

module.exports = {
  Cliente,
  Contato,
  Contatos,
  Endereco,
  Enderecos,
  Favoritos,
  Marca,
  Pedido,
  Pedidos,
  Produto,
  Produtos
}