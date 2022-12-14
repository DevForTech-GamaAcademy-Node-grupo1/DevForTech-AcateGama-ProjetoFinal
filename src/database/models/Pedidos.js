const connection = require('../index');
const Sequelize = require('sequelize');
const Cliente = require('./Cliente');
const Pedido = require('./Pedido');

const Pedidos = connection.define('pedidos_cliente', {
    clienteId: {
        type: Sequelize.INTEGER,
        references: {
            model: Cliente,
            key: "id"
        }
    },
    pedidoId: {
        type: Sequelize.INTEGER,
        references: {
            model: Pedido,
            key: "id"
        }
    }
},
  {  
  timestamps: false,
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Pedidos.sync({ force: flag });
})();

module.exports = Pedidos;