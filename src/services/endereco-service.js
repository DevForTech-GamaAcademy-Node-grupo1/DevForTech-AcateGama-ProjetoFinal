const endereco_repository = require('../repositories/endereco-repository');
const cliente_repository = require('../repositories/cliente-repository');

exports.create = async (endereco, clienteId) => {
  if (!(await cliente_repository.getById(clienteId))) {
    console.log('Cliente nao encontrado');
    throw 'Cliente não encontrado';
  }
  await endereco_repository.create(endereco, clienteId);
  console.log('Endereco criado');
}

exports.deleteById = async (id) => {
  if (!(await endereco_repository.getById(id))) {
    console.log('Endereço não encontrado');
    throw 'Endereço não encontrado';
  }
  await endereco_repository.deleteById(id);
}

exports.findAll = async () => {
  let enderecos = await endereco_repository.getAll();
  console.log(enderecos);
  return enderecos;
}

exports.findById = async (id) => {
  let endereco = await endereco_repository.getById(id);
  if (endereco) {
    console.log('Endereco encontrado');
    return endereco;
  }
  console.log('Endereco não encontrado');
  throw 'Endereco não encontrado';
}

exports.findByClienteId = async (id) => {
  let enderecos = await endereco_repository.getByClientId(id);
  //Sem o índice, ele retorna dois arrays com o mesmo coteúdo
  if (enderecos[0].length <= 0) {
    throw 'Nenhum endereço encontrado';
  }
  console.log(enderecos[0]);
  return enderecos[0];
};

exports.updateEndereco = async (endereco) => {
  if (!(await endereco_repository.getById(endereco.id))) {
    console.log('Endereço não encontrado');
    throw 'Endereço não encontrado';
  }
  await endereco_repository.updateEndereco(endereco);
}