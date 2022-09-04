const Sequelize = require('sequelize');
const connection = require('../index');

const Marca = connection.define('marca', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Marca.sync({ force: flag });
})();

module.exports = Marca;