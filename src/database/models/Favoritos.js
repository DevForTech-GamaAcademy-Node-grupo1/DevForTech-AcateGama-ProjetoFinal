const connection = require('../index');
const Sequelize = require('sequelize');
const Cliente = require('./Cliente');
const Produto = require('./Produto');

const Favoritos = connection.define('favoritos', {
    clienteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Cliente,
            key: "id"
        }
    },
    produtoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Produto,
            key: "id"
        }
    }
},
  {  
  timestamps: false,
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Favoritos.sync({ force: false });
})();

module.exports = Favoritos;
