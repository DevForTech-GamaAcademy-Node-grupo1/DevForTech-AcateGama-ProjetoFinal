const modelo_repository = require('../repositories/modelo-repository');

async function createModelo(modelo) {
  if (modelo_repository.getModeloByName(modelo.nome)) {
    console.log('modelo já existe');
    return;
  }
  modelo_repository.createModelo(modelo);
}

async function deleteModelo(id) {
  if (modelo_repository.getModeloById(id)) {
    modelo_repository.deleteModelo(id);
    return;
  }
  console.log('modelo não encontrado');
}

async function findAllModelo() {
  let modelos = modelo_repository.getAllModelo();
  console.log(modelos);
  return
}

async function findModeloById(id) {
  let modelo = modelo_repository.getModeloById(id);
  if (modelo) {
    console.log('modelo encontrado');
    return;
  }
  console.log('modelo não encontrado');
}

async function updateModelo(modelo) {
  modelo_repository.updateModelo(modelo);
}

module.exports = modelo_repository;