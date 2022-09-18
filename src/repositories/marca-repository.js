const Marca = require('../database/models/Marca');

exports.getMarcaById = async (id) => {
  let marca = await Marca.findByPk(id);
  return marca;
}

exports.getMarcaByName = async (nome) => {
  let marca = await Marca.findOne({ where: { nome: nome } });
  console.log(JSON.stringify(marca));
  return marca;
}

exports.getAllMarca = async () => {
  let marcas = await Marca.findAll();
  return marcas;
}

exports.createMarca = async (nome) => {
  Marca.create({
    nome: nome
  }).then(marca => {
    console.log('Marca criada.');
  })
  .catch((e) => {
    console.log(e);
  });
}

exports.updateMarca = async (marcaToUpdate) => {
  let marca = await Marca.findByPk(marcaToUpdate.id);
  marca = marcaToUpdate;
  await marca.save();
}

exports.deleteMarca = async (id) => {
  let marca = await Marca.findByPk(id);
  await marca.destroy();
}