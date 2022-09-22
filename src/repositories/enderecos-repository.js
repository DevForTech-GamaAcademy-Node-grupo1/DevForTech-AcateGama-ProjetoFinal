const { Enderecos } = require('../database/models/index');

exports.create = async (endereco, clienteId) => {
  Enderecos.create({
    enderecoId: endereco.id,
    clienteId: clienteId
  })
  .catch((e) => {
    console.log(e);
  });
}

exports.getById = async (enderecoId, clienteId) => {
  if (enderecoId != undefined) {
    let endereco = await Enderecos.findOne({
      where: {
        enderecoId: enderecoId
      }
    });
    return endereco;
  }
  else if (clienteId != undefined) {
    let endereco = await Enderecos.findOne({
      where: {
        clienteId: clienteId
      }
    });
    return endereco;
  }
}

exports.getAll = async () => {
  return await Enderecos.findAll();
}

exports.delete = async (enderecoId, clienteId) => {
  let endereco = await Enderecos.findOne({
    where: {
      enderecoId: enderecoId,
      clienteId: clienteId
    }
  });
  await endereco.destroy();
}