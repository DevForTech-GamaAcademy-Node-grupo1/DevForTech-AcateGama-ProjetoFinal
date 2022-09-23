const Sequelize = require('sequelize');
const connection = require('../index');
const Endereco = require('./Endereco');

const Pedido = connection.define('pedido', {
    valor_total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    status_geral: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    enderecoId: {
        type: Sequelize.INTEGER,
        references: {
            model: Endereco,
            key: 'id'
        }
    }
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Pedido.sync({ force: flag });
})();

module.exports = Pedido;