const contato_repository = require('../repositories/contato-repository');

async function createContato(contato) {
  contato_repository.createContato(contato);
}

async function deleteContato(id) {
  if (contato_repository.getContatoById(id)) {
    contato_repository.deleteContato(id);
    return;
  }
  console.log('contato não encontrado');
}

async function findAllContato() {
  let contatos = contato_repository.getAllContato();
  console.log(contatos);
  return
}

async function findContatoById(id) {
  let contato = contato_repository.getContatoById(id);
  if (contato) {
    console.log('contato encontrado');
    return;
  }
  console.log('contato não encontrado');
}

async function updateContato(contato) {
  contato_repository.updateContato(contato);
}

module.exports = contato_repository;