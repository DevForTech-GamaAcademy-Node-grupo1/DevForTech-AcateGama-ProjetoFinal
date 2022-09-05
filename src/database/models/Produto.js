const Sequelize = require('sequelize');
const connection = require('../index');
const Marca = require('./Marca');
const Modelo = require('./Modelo');

const Produto = connection.define('produto', {
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Produto.belongsTo(Marca);
Produto.belongsTo(Modelo);

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Produto.sync({ force: flag });
})();

module.exports = Produto;