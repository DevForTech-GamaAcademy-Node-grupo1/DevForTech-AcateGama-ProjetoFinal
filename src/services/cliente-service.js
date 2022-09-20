const cliente_repository = require('../repositories/cliente-repository');
const bcrypt = require('bcryptjs');

async function create(cliente) {
  if (await cliente_repository.getClienteByEmail(cliente.email) != null) {
    console.log('cliente já existe');
    return;
  }
  let salt = bcrypt.genSaltSync(10);
  cliente.senha = bcrypt.hashSync(cliente.senha, salt);
  if (!cliente.permissao) {
    cliente.permissao = 0;
  }
  await cliente_repository.create(cliente);
}

async function deleteClienteById(id) {
  if (await cliente_repository.getClienteById(id)) {
    await cliente_repository.deleteCliente(id);
    return;
  }
  console.log('Cliente não encontrado');
}

async function authenticateByEmail(clienteToAuthenticate) {
  let cliente = await cliente_repository.getClienteByEmail(clienteToAuthenticate.email);
  if (!(cliente) || !(bcrypt.compareSync(clienteToAuthenticate.senha, cliente.senha))) {
    console.log('E-mail ou senha incorretos');
    throw 'E-mail ou senha incorretos';
  }
  console.log('Cliente logado');
  return JSON.parse(JSON.stringify(cliente));
}

async function deleteClienteByEmail(email) {
  let cliente = await cliente_repository.getClienteByEmail(email);
  if (cliente) {
    await cliente_repository.deleteCliente(cliente.id);
    return;
  }
  console.log('Cliente não encontrado');
}

async function findAllCliente() {
  let clientes = await cliente_repository.getAllCliente();
  console.log(clientes);
  return JSON.parse(JSON.stringify(clientes));
}

async function findClienteById(id) {
  let cliente = await cliente_repository.getClienteById(id);
  if (cliente) {
    console.log('cliente encontrado');
    return JSON.parse(JSON.stringify(cliente));
  }
  console.log('cliente não encontrado');
  return null;
}

async function findClienteByName(nome) {
  let cliente = await cliente_repository.getClienteByName(nome);
  if (cliente) {
    console.log('cliente encontrado');
    return JSON.parse(JSON.stringify(cliente));
  }
  console.log('cliente não encontrado');
  return null;
}

async function findClienteByEmail(email) {
    let cliente = await cliente_repository.getClienteByEmail(email);
    if (cliente) {
      console.log('cliente encontrado');
      return JSON.parse(JSON.stringify(cliente));
    }
    console.log('cliente não encontrado');
    return null;
}

async function findClienteByCPF(cpf) {
    let cliente = await cliente_repository.getClienteByCPF(cpf);
    if (cliente) {
      console.log('cliente encontrado');
      return JSON.parse(JSON.stringify(cliente));
    }
    console.log('cliente não encontrado');
    return null;
}

async function updateCliente(cliente) {
  await cliente_repository.updateCliente(cliente);
}

module.exports = {
  create,
  deleteClienteById,
  deleteClienteByEmail,
  findClienteByEmail,
  findClienteByCPF,
  findAllCliente,
  findClienteById,
  findClienteByName,
  updateCliente,
  authenticateByEmail
}