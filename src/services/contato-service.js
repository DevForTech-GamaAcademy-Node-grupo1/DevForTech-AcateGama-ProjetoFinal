const contato_repository = require('../repositories/contato-repository');

exports.create = async (contato, clienteId) => {
  await contato_repository.create(contato, clienteId);
  console.log('Contato criado');
}

exports.deleteById = async (id) => {
  if (await contato_repository.getById(id)) {
    await contato_repository.deleteById(id);
    return;
  }
  throw 'contato não encontrado';
}

exports.findAll = async () => {
  let contatos = await contato_repository.getAll();
  console.log(contatos)
  return JSON.parse(contatos)
}

exports.findById = async (id) => {
  let contato =  await contato_repository.getById(id);
  if (contato) {
    return JSON.parse(contato);
  }
  console.log('contato não encontrado');
}

exports.updateContato = async (contato) => {
  await contato_repository.updateContato(contato);
}