const Sequelize = require('sequelize');
const connection = require('../index');

const Pedido = require('./Pedido');
const Produto = require('./Produto');

const Produtos = connection.define('produtos_pedidos', {
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
},{
    timestamps: false,
});

Pedido.belongsToMany(Produto, {
    through: { model: 'produtos_pedidos', unique: false },
    as: 'produtos_pedidoId',
    foreignKey: 'PedidoId'
});

Produto.belongsToMany(Pedido, {
    through: { model: 'produtos_pedidos', unique: false },
    as: 'produtos_produtoId',
    foreignKey: 'ProdutoId'
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Produtos.sync({ force: flag });
})();

module.exports = Produtos;