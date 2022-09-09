const Marca = require('../database/models/Marca');

async function getMarcaById(id) {
  let marca = await Marca.findByPk(id);
  return JSON.stringify(marca);
}

async function getMarcaByName(nome) {
  let marca = await Marca.findOne({ where: { nome: nome } });
  console.log(JSON.stringify(marca));
  return JSON.stringify(marca);
}

async function getAllMarca() {
  let marca = await Marca.findAll();
  return JSON.stringify(marca);
}

async function createMarca(marca) {
  await Marca.create({
    nome: marca.nome
  });
}

async function updateMarca(marcaToUpdate) {
  let marca = await Marca.findByPk(marcaToUpdate.id);
  marca = marcaToUpdate;
  await marca.save();
}

async function deleteMarca(id) {
  let marca = await Marca.findByPk(id);
  await marca.destroy();
}

module.exports = {
  getMarcaById,
  getMarcaByName,
  createMarca,
  updateMarca,
  deleteMarca,
  getAllMarca
}