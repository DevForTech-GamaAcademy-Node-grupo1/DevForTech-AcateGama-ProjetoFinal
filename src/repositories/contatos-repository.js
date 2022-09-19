const Contatos = require('../database/models/Contatos');

async function getAllContatosByClienteId(clienteId) {
  let contatos = await Contatos.findAll({
    where: {
      clienteId: clienteId
    }
  });
  return JSON.stringify(contatos);
}

async function getAllContatosByContatoId(contatoId) {
  let contatos = await Contatos.findAll({
    where: {
      contatoId: contatoId
    }
  });
  return JSON.stringify(contatos);
}

async function getContatos(contatos) {
  let contatos = await Contatos.findOne({
    where: {
      clienteId: contatos.clienteId,
      contatoId: contatos.contatoId
    }
  });
  return JSON.stringify(contatos);
}

async function getAllContatos(contatos) {
  let contatos = await Contatos.findAll();
  return JSON.stringify(contatos);
}

async function createContatos(contatos) {
  await Contatos.create({
    clienteId: contatos.clienteId,
    contatoId: contatos.contatoId
  });
}

async function deleteContatos(contatos) {
  let contatos = await Contatos.findOne({
    where: {
      clienteId: contatos.clienteId,
      contatoId: contatos.contatoId
    }
  });
  await contatos.destroy();
}

module.exports = {
  getAllContatosByClienteId,
  getAllContatosByContatoId,
  getContatos,
  getAllContatos,
  createContatos,
  deleteContatos
}