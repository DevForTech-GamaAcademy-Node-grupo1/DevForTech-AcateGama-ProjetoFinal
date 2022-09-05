const connection = require('../index');

const Cliente = require('./Cliente');
const Endereco = require('./Endereco');

const Enderecos = connection.define('enderecos_clientes', {},
  {
    timestamps: false,
});

Cliente.belongsToMany(Endereco, {
    through: { model: 'enderecos_clientes', unique: false },
    as: 'enderecos_clienteId',
    foreignKey: 'ClienteId'
});
Endereco.belongsToMany(Cliente, {
    through: { model: 'enderecos_clientes', unique: false },
    as: 'enderecos_enderecoId',
    foreignKey: 'EnderecoId'
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Enderecos.sync({ force: flag });
})();

module.exports = Enderecos;