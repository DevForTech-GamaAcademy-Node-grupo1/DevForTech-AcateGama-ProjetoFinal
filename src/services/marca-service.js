const marca_repository = require('../repositories/marca-repository');

async function createMarca(marca) {
  if (marca_repository.getMarcaByName(marca.nome)) {
    console.log('marca já existe');
    return;
  }
  marca_repository.createMarca(marca);
}

async function deleteMarca(id) {
  if (marca_repository.getMarcaById(id)) {
    marca_repository.deleteMarca(id);
    return;
  }
  console.log('Marca não encontrado');
}

async function findAllMarca() {
  let marcas = marca_repository.getAllMarca();
  console.log(marcas);
  return
}

async function findMarcaById(id) {
  let marca = marca_repository.getMarcaById(id);
  if (marca) {
    console.log('marca encontrado');
    return;
  }
  console.log('marca não encontrado');
}

async function updateMarca(marca) {
  marca_repository.updateMarca(marca);
}

module.exports = marca_repository;