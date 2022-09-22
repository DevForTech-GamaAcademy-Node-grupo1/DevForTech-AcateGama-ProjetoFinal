const { Marca } = require('../database/models/index');

exports.getById = async (id) => {
  let marca = await Marca.findByPk(id);
  return marca;
}

exports.getByName = async (nome) => {
  let marca = await Marca.findOne({ where: { nome: nome } });
  console.log(JSON.stringify(marca));
  return marca;
}

exports.getAll = async () => {
  let marcas = await Marca.findAll();
  return marcas;
}

exports.create = async (nome) => {
  Marca.create({
    nome: nome
  }).then(() => {
    console.log('Marca criada.');
  })
  .catch((e) => {
    console.log(e);
  });
}

exports.updateMarca = async (marcaToUpdate) => {
  let marca = await Marca.findByPk(marcaToUpdate.id);
  await marca.update(marcaToUpdate);
}

exports.deleteById = async (id) => {
  let marca = await Marca.findByPk(id);
  if (!marca) {
    throw 'Marca não encontrada';
  }
  Marca.destroy({ where: { id: id } });
}