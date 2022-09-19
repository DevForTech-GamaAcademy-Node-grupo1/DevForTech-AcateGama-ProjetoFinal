const Modelo = require('../database/models/Modelo');

async function getModeloById(id) {
  let modelo = await Modelo.findByPk(id);
  return JSON.stringify(modelo);
}

async function getModeloByName(nome) {
  let modelo = await Modelo.findOne({ where: { nome: nome } });
  console.log(JSON.stringify(modelo));
  return JSON.stringify(modelo);
}

async function getAllModelo() {
  let modelos = await Modelo.findAll();
  return JSON.stringify(modelos);
}

async function createModelo(modelo) {
  await Modelo.create({
    nome: modelo.nome,
    descricao: modelo.descricao
  });
}

async function updateModelo(modeloToUpdate) {
  let modelo = await Modelo.findByPk(modeloToUpdate.id);
  modelo = modeloToUpdate;
  await modelo.save();
}

async function deleteModelo(id) {
  let modelo = await Modelo.findByPk(id);
  await modelo.destroy();
}

module.exports = {
  getModeloById,
  getModeloByName,
  getAllModelo,
  createModelo,
  updateModelo,
  deleteModelo
}