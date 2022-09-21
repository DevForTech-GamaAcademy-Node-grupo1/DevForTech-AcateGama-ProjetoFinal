const Contatos = require('../database/models/Contatos');



async function getAllContatosByClienteId(clienteId) {
  let contatos = await Contatos.findAll({
    where: {
      ClienteId: clienteId
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

async function getContatos(contato) {
  let contatos = await Contatos.findOne({
    where: {
      clienteId: contato.clienteId,
      contatoId: contato.contatoId
    }
  });
  
  return JSON.stringify(contatos);
}

async function getAllContatos() {
  let contatos = await Contatos.findAll();
  return JSON.stringify(contatos);
}

async function createContatos(contatos) {
  console.log('createContatos ', contatos);
  await Contatos.create({
    ClienteId: contatos.clienteId,
    ContatoId: contatos.contatoId
  });
}



async function deleteContatos(contato) {
  let contatos = await Contatos.findOne({
    where: {
      clienteId: contato.clienteId,
      contatoId: contato.contatoId
    }
  });
  await contato.destroy();
}



module.exports = {
  getAllContatosByClienteId,
  getAllContatosByContatoId,
  getContatos,
  getAllContatos,
  createContatos,
  deleteContatos
}