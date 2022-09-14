const marca_repository = require('../repositories/marca-repository');

async function createMarca(nome) {
  if (await marca_repository.getMarcaByName(nome) != null) {
    console.log('marca já existe');
    return;
  }
  await marca_repository.createMarca(nome);
}

async function deleteMarcaById(id) {
  if (await marca_repository.getMarcaById(id)) {
    await marca_repository.deleteMarca(id);
    return;
  }
  console.log('Marca não encontrado');
}

async function deleteMarcaByName(nome) {
  let marca = await marca_repository.getMarcaByName(nome);
  if (marca) {
    await marca_repository.deleteMarca(marca.id);
    return;
  }
  console.log('Marca não encontrado');
}

async function findAllMarca() {
  let marcas = await marca_repository.getAllMarca();
  console.log(marcas);
  return JSON.parse(JSON.stringify(marcas));
}

async function findMarcaById(id) {
  let marca = await marca_repository.getMarcaById(id);
  if (marca) {
    console.log('marca encontrado');
    return JSON.parse(JSON.stringify(marca));
  }
  console.log('marca não encontrado');
  return null;
}

async function findMarcaByName(nome) {
  let marca = await marca_repository.getMarcaByName(nome);
  if (marca) {
    console.log('marca encontrado');
    return JSON.parse(JSON.stringify(marca));
  }
  console.log('marca não encontrado');
  return null;
}

async function updateMarca(marca) {
  await marca_repository.updateMarca(marca);
}

module.exports = {
  createMarca,
  deleteMarcaById,
  deleteMarcaByName,
  findAllMarca,
  findMarcaById,
  findMarcaByName,
  updateMarca
}