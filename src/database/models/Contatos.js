const connection = require('../index');

const Cliente = require('./Cliente');
const Contato = require('./Contato');

const Contatos = connection.define('contatos_clientes', {},
  {
    timestamps: false,
});

Cliente.belongsToMany(Contato, {
    through: { model: 'contatos_clientes', unique: false },
    as: 'contatos_clienteId',
    foreignKey: 'ClienteId'
});
Contato.belongsToMany(Cliente, {
    through: { model: 'contatos_clientes', unique: false },
    as: 'contatos_contatoId',
    foreignKey: 'ContatoId'
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Contatos.sync({ force: flag });
})();

module.exports = Contatos;