const Contato = require('../database/models/Contato');

async function getContatoById(id) {
  let contato = await Contato.findByPk(id);
  return JSON.stringify(contato);
}

async function getAllContato() {
  let contatos = await Contato.findAll();
  return JSON.stringify(contatos);
}

async function createContato(contato) {
  await Contato.create({
    numero: contato.numero,
  });
}

async function updateContato(contatoToUpdate) {
  let contato = await Contato.findByPk(contatoToUpdate.id);
  contato = contatoToUpdate;
  await contato.save();
}

async function deleteContato(id) {
  let contato = await Contato.findByPk(id);
  await contato.destroy();
}

module.exports = {
  getContatoById,
  getAllContato,
  createContato,
  updateContato,
  deleteContato
}