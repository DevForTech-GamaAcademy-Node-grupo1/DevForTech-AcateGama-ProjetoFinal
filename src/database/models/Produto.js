const Sequelize = require('sequelize');
const connection = require('../index');
const Marca = require('./Marca');

const Produto = connection.define('produto', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    marcaId: {
        type: Sequelize.INTEGER,
        references: {
            model: Marca,
            key: 'id'
        }
    }
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Produto.sync({ force: flag });
})();

module.exports = Produto;