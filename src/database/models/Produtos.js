const Sequelize = require('sequelize');
const connection = require('../index');
const Pedido = require('./Pedido');
const Produto = require('./Produto');

const Produtos = connection.define('produtos_pedido', {
  pedidoId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Pedido,
      key: "id"
    }
  },
  produtoId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Produto,
      key: "id"
    }
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
},{
    timestamps: false,
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == "false" ? false : true;
    await Produtos.sync({ force: flag });
})();

module.exports = Produtos;