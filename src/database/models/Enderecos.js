const connection = require('../index');
const Sequelize = require('sequelize');
const Cliente = require('./Cliente');
const Endereco = require('./Endereco');

const Enderecos = connection.define('enderecos_cliente', {
  clienteId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Cliente,
      key: "id"
    }
  },
  enderecoId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Endereco,
      key: "id"
    }
  }
},
  {
    timestamps: false,
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Enderecos.sync({ force: flag });
})();

module.exports = Enderecos;