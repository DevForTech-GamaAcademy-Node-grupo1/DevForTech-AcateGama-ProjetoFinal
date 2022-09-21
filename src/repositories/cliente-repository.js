const Cliente = require('../database/models/Cliente');

async function getClienteById(id) {
  let cliente = await Cliente.findByPk(id);
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

async function createCliente(cliente) {
  console.log(email);
  await Cliente.create({
    email: cliente.email,
    senha: cliente.senha,
    nome: cliente.nome,
    cpf: cliente.cpf,
    permissao: cliente.permissao
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
  getClienteByEmail,
  getClienteByCPF,
  createCliente,
  updateCliente,
  deleteCliente,
  getAllCliente
}