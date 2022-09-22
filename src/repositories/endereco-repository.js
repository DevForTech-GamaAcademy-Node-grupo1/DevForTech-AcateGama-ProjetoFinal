const { Endereco, Enderecos } = require('../database/models/index');
const connection = require('../database/index');

exports.create = async (endereco, clienteId)  => {
  console.log(endereco);
  Endereco.create({
    rua: endereco.rua,
    numero: endereco.numero,
    bairro: endereco.bairro,
    complemento: endereco.complemento,
    cidade: endereco.cidade,
    estado: endereco.estado,
    cep: endereco.cep
  }).then((endereco) => {
    Enderecos.create({
      enderecoId: endereco.id,
      clienteId: clienteId
    });
  })
  .catch((e) => {
    console.log(e);
  });
}

exports.getAll = async () => {
  return await Endereco.findAll();
}

exports.getById = async (id) => {
  return await Endereco.findByPk(id);
}

exports.getByClientId = async (id) => {
  return await connection.query(
    "select * from enderecos_clientes inner join enderecos where clienteId = :id and enderecos.id = enderecoId",
    {
      replacements: { id: id }
    });
}

exports.updateEndereco = async (enderecoToUpdate) => {
  let endereco = await Endereco.findByPk(enderecoToUpdate.id);
  await endereco.update(enderecoToUpdate);
}

exports.deleteById = async (id) => {
  await Endereco.destroy({ where: { id: id } });
}