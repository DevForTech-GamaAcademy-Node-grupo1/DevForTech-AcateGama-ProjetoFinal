const Sequelize = require('sequelize');
const connection = require('../index');

const Cliente = connection.define('cliente', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permissao: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Cliente.sync({ force: flag });
})();

module.exports = Cliente;