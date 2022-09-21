const contato_repository = require('../repositories/contato-repository');
const contatos_repository = require('../repositories/contatos-repository');

async function createContato(contato,clienteId) {
  console.log('service ', clienteId);
  contato_repository.createContato(contato).then(contato =>{
    console.log('Then ', contato)
    console.log('Then ', clienteId);
    contatos_repository.createContatos({
      "clienteId": clienteId,
      "contatoId": contato.id
    })}).catch(() =>{})
}

async function deleteContato(id) {
  if (contato_repository.getContatoById(id)) {
    contato_repository.deleteContato(id);
    return;
  }
       throw {"message":'contato não encontrado'}
}

async function findAllContato() {
  let contatos = await contato_repository.getAllContato();
  console.log(contatos)
  return JSON.parse(contatos)
}

async function findContatoById(id) {
  let contato =  await contato_repository.getContatoById(id);
  if (contato) {
  return JSON.parse(contato);
  }
  console.log('contato não encontrado');
}

async function updateContato(contato) {
    contato_repository.updateContato(contato);
}

module.exports = {
  createContato,
  deleteContato,
  findAllContato,
  findContatoById,
  updateContato
};