const Sequelize = require('sequelize');
const connection = require('../index');

const Modelo = connection.define('modelo', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Modelo.sync({ force: flag });
})();

module.exports = Modelo;