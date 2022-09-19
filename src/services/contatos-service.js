const contatos_repository = require('../repositories/contatos-repository');

async function createContatos(contatos) {
  let contatos = contatos_repository.getContatos(contatos);
  if (contatos) {
    console.log('contatos encontrado');
    return;
  }
  contatos_repository.createContatos(contatos);
}

async function deleteContatos(contatos) {
  let contatos = contatos_repository.getContatos(contatos);
  if (!contatos) {
    console.log('contatos não encontrado');
    return
  }
  contatos_repository.deleteContato(id);
  console.log('contatos deletado');
}

async function findAllContatos() {
  let contatos = contatos_repository.getAllContatos();
  console.log(contatos);
  return;
}

async function findAllContatosByClienteId(id) {
  let contatos = contatos_repository.getAllContatosByClienteId(id);
  console.log(contatos);
  return;
}

async function findAllContatosByContatoId(id) {
  let contatos = contatos_repository.getAllContatosByContatoId(id);
  console.log(contatos);
  return;
}

module.exports = contatos_repository;