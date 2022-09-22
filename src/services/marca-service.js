const marca_repository = require('../repositories/marca-repository');

exports.create = async (nome) => {
  if (await marca_repository.getByName(nome)) {
    console.log('marca já existe');
    throw { message: 'marca já existe' };
  }
  await marca_repository.create(nome);
}

exports.deleteById = async (id) => {
  if (await marca_repository.getById(id)) {
    await marca_repository.deleteById(id);
    return;
  }
  console.log('Marca não encontrado');
}

exports.deleteByName = async (nome) => {
  let marca = await marca_repository.getByName(nome);
  if (marca) {
    await marca_repository.deleteById(marca.id);
    return;
  }
  console.log('Marca não encontrado');
}

exports.findAll = async () => {
  let marcas = await marca_repository.getAll();
  console.log(marcas);
  return marcas;
}

exports.findById = async (id) => {
  let marca = await marca_repository.getById(id);
  if (marca) {
    console.log('marca encontrado');
    return marca;
  }
  console.log('marca não encontrado');
  throw { 'message': 'marca não encontrado' };
}

exports.findByName = async (nome) => {
  let marca = await marca_repository.getByName(nome);
  if (marca) {
    console.log('marca encontrado');
    return marca;
  }
  console.log('marca não encontrado');
  throw { 'message': 'marca não encontrado' };
}

exports.updateMarca = async (marca) => {
  await marca_repository.updateMarca(marca);
}