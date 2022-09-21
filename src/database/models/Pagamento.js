const Sequelize = require('sequelize');
const connection = require('../index');
const Pedido = require('./Pedido');

const Pagamento = connection.define('pagamento', {
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status_pagamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo_pagamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Pagamento.belongsTo(Pedido);

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Pagamento.sync({ force: flag });
})();

module.exports = Pagamento;