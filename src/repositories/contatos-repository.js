const { Contatos } = require('../database/models/index');

exports.getAllContatosByClienteId = async (clienteId) => {
  let contatos = await Contatos.findAll({
    where: {
      ClienteId: clienteId
    }
  });
  return JSON.stringify(contatos);
}

exports.getAllContatosByContatoId = async (contatoId) => {
  let contatos = await Contatos.findAll({
    where: {
      contatoId: contatoId
    }
  });
  return JSON.stringify(contatos);
}

exports.getContatos = async (contato) => {
  let contatos = await Contatos.findOne({
    where: {
      clienteId: contato.clienteId,
      contatoId: contato.contatoId
    }
  });
  
  return JSON.stringify(contatos);
}

exports.getAllContatos = async () => {
  let contatos = await Contatos.findAll();
  return JSON.stringify(contatos);
}

exports.create = async (contatos) => {
  console.log('createContatos ', contatos);
  await Contatos.create({
    ClienteId: contatos.clienteId,
    ContatoId: contatos.contatoId
  });
}

exports.deleteContatos = async (contato) => {
  let contatos = await Contatos.findOne({
    where: {
      clienteId: contato.clienteId,
      contatoId: contato.contatoId
    }
  });
  await contato.destroy();
}