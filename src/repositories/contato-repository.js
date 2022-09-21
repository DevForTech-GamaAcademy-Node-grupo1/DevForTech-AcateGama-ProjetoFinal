const Contato = require('../database/models/Contato');

async function getContatoById(id) {
  let contato = await Contato.findByPk(id, { attributes: ["id","numero"], raw :true });
  return JSON.stringify(contato);
}

async function getAllContato() {
  let contatos = await Contato.findAll({ attributes: ["id","numero"], raw :true });
  return JSON.stringify(contatos);
}

async function createContato(contato) {
 return  await Contato.create({
    numero: contato.numero,
  });
}

async function updateContato(contatoToUpdate) {
  console.log(contatoToUpdate)
  let contato = await Contato.findByPk(contatoToUpdate.id);
  console.log(contato)
  await contato.update(contatoToUpdate)
}

async function deleteContato(id) {
  await Contato.destroy({ where:{id:id} });
}

module.exports = {
  getContatoById,
  getAllContato,
  createContato,
  updateContato,
  deleteContato
}