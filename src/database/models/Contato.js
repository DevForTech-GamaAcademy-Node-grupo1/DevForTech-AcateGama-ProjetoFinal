const Sequelize = require('sequelize');
const connection = require('../index');

const Contato = connection.define('contato', {
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Contato.sync({ force: flag });
})();

module.exports = Contato;