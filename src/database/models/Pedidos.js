const connection = require('../index');

const Cliente = require('./Cliente');
const Pedido = require('./Pedido');

const Pedidos = connection.define('pedidos_clientes', {},
  {  
  timestamps: false,
});

Cliente.belongsToMany(Pedido, {
    through: { model: 'pedidos_clientes', unique: false },
    as: 'pedidos_clienteId',
    foreignKey: 'ClienteId'
});

Pedido.belongsToMany(Cliente, {
    through: { model: 'pedidos_clientes', unique: false },
    as: 'pedidos_pedidosId',
    foreignKey: 'PedidoId'
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Pedidos.sync({ force: flag });
})();

module.exports = Pedidos;