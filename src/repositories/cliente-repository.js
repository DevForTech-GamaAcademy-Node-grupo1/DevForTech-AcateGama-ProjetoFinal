const { Cliente } = require('../database/models/index');

exports.getById = async (id) => {
  let cliente = await Cliente.findByPk(id, {
    attributes: { exclude: ['senha'] },
  });
  return cliente;
}

exports.getByEmail = async (email) => {
  let cliente = await Cliente.findOne({
    where: { email: email }
  });
  if (!cliente) {
    console.log('Cliente não encontrado');
    return null;
  }
  return cliente;
}

exports.getByName = async (nome) => {
  let cliente = await Cliente.findOne({
    where: { nome: nome },
    attributes: { exclude: ['senha'] },
  });
  console.log(cliente);
  return cliente;
}

exports.getByCPF = async (cpf) => {
  console.log(cpf)
  let cliente = await Cliente.findOne({
    where: { cpf: cpf },
    attributes: { exclude: ['senha'] },
  });
  console.log(JSON.stringify(cliente));
  return cliente;
}

exports.getAll = async () => {
  let clientes = await Cliente.findAll({
    attributes: { exclude: ['senha'] },
  });
  return clientes;
}

exports.create = async (cliente) => {
  await Cliente.create({
    email: cliente.email,
    senha: cliente.senha,
    nome: cliente.nome,
    cpf: cliente.cpf,
    permissao: cliente.permissao
  });
}

exports.updateById = async (clienteToUpdate) => {
  let cliente = await Cliente.findByPk(clienteToUpdate.id);
  await cliente.update(clienteToUpdate);
}

exports.deleteById = async (id) => {
  let cliente = await Cliente.findByPk(id);
  await cliente.destroy({ where: { id: id } });
}