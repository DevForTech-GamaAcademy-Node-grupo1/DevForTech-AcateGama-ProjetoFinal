const Cliente = require('../database/models/Cliente');

async function getClienteById(id) {
  let cliente = await Cliente.findByPk(id);
  return cliente;
}

async function getClienteByName(nome) {
  let cliente = await Cliente.findOne({ where: { nome: nome } });
  console.log(JSON.stringify(cliente));
  return cliente;
}

async function getClienteByEmail(email) {
    let cliente = await Cliente.findOne({ where: { email: email } });
    console.log(JSON.stringify(cliente));
    return cliente;
}

async function getClienteByCPF(cpf) {
    let cliente = await Cliente.findOne({ where: { cpf: cpf } });
    console.log(JSON.stringify(cliente));
    return cliente;
}

async function getAllCliente() {
  let clientes = await Cliente.findAll();
  return clientes;
}

async function createCliente(nome) {
  console.log(nome);
  await Cliente.create({
    nome: nome
  });
}

async function updateCliente(clienteToUpdate) {
  let cliente = await Cliente.findByPk(clienteToUpdate.id);
  cliente = clienteToUpdate;
  await cliente.save();
}

async function deleteCliente(id) {
  let cliente = await Cliente.findByPk(id);
  await cliente.destroy();
}

module.exports = {
  getClienteById,
  getClienteByName,
  getClienteByEmail,
  getClienteByCPF,
  createCliente,
  updateCliente,
  deleteCliente,
  getAllCliente
}