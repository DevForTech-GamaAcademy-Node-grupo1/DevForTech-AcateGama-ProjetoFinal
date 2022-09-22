const connection = require('../index');
const Sequelize = require('sequelize');
const Cliente = require('./Cliente');
const Contato = require('./Contato');

const Contatos = connection.define('contatos_cliente', {
  clienteId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Cliente,
      key: "id"
    }
  },
  contatoId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Contato,
      key: "id"
    }
  }
},
  {
    timestamps: false,
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Contatos.sync({ force: flag });
})();

module.exports = Contatos;