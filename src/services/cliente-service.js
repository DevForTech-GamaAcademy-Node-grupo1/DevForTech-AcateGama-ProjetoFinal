const cliente_repository = require('../repositories/cliente-repository');
const bcrypt = require('bcryptjs');

exports.create = async (cliente) => {
  if (await cliente_repository.getByEmail(cliente.email) != null) {
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

exports.deleteById = async (id) => {
  if (await cliente_repository.getById(id)) {
    await cliente_repository.deleteById(id);
    return;
  }
  console.log('Cliente não encontrado');
}

exports.authenticateByEmail = async (clienteToAuthenticate) => {
  let cliente = await cliente_repository.getByEmail(clienteToAuthenticate.email);
  if (!(cliente) || !(bcrypt.compareSync(clienteToAuthenticate.senha, cliente.senha))) {
    console.log('E-mail ou senha incorretos');
    throw 'E-mail ou senha incorretos';
  }
  console.log('Cliente logado');
  return JSON.parse(JSON.stringify(cliente));
}

exports.deleteByEmail = async (email) => {
  let cliente = await cliente_repository.getByEmail(email);
  if (cliente) {
    await cliente_repository.deleteById(cliente.id);
    return;
  }
  console.log('Cliente não encontrado');
}

exports.findAll = async ()  => {
  let clientes = await cliente_repository.getAll();
  console.log(clientes);
  return JSON.parse(JSON.stringify(clientes));
}

exports.findById  = async (id) => {
  let cliente = await cliente_repository.getById(id);
  if (cliente) {
    console.log('cliente encontrado');
    return JSON.parse(JSON.stringify(cliente));
  }
  console.log('cliente não encontrado');
  throw {'message' : 'cliente não encontrado'};
}

exports.findByName = async (nome) => {
  let cliente = await cliente_repository.getByName(nome);
  if (cliente) {
    console.log('cliente encontrado');
    return JSON.parse(JSON.stringify(cliente));
  }
  console.log('cliente não encontrado');
  throw { 'message': 'cliente não encontrado' };
}

exports.findByEmail = async (email) => {
    let cliente = await cliente_repository.getByEmail(email);
    if (cliente) {
      console.log('cliente encontrado');
      return JSON.parse(JSON.stringify(cliente));
    }
    console.log('cliente não encontrado');
    throw { 'message': 'cliente não encontrado' };
}

exports.findByCPF = async (cpf)  => {
    let cliente = await cliente_repository.getByCPF(cpf);
    if (cliente) {
      console.log('cliente encontrado');
      return JSON.parse(JSON.stringify(cliente));
    }
    console.log('cliente não encontrado');
    throw { 'message': 'cliente não encontrado' };
}

exports.updateById = async (cliente) => {
  await cliente_repository.updateById(cliente);
}