const connection = require('../index');

const Cliente = require('./Cliente');
const Produto = require('./Produto');

const Favoritos = connection.define('favoritos', {},
  {  
  timestamps: false,
});

Cliente.belongsToMany(Produto, {
    through: { model: 'favoritos', unique: false },
    as: 'favoritos_clienteId',
    foreignKey: 'ClienteId'
});
Produto.belongsToMany(Cliente, {
    through: { model: 'favoritos', unique: false },
    as: 'favoritos_produtoId',
    foreignKey: 'ProdutoId'
});

(async () => {
    const flag = process.env.APP_MODEL_FORCE == 'false' ? false : true;
    await Favoritos.sync({ force: flag });
})();

module.exports = Favoritos;
