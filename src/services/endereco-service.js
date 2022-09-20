const endereco_repository = require('../repositories/endereco-repository');

exports.create = async (endereco, clienteId) => {
  await endereco_repository.create(endereco, clienteId);
  console.log('Endereco criado');
}

exports.delete = async (id) => {
  let endereco = await endereco_repository.getById(id);
  if (endereco) {
    console.log(endereco);
    await endereco_repository.delete(id);
    return;
  }
  console.log('Endereco não encontrado');
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
    console.log(endereco);
    return endereco;
  }
  console.log('Endereco não encontrado');
  return null;
}

exports.findByClienteId = async (id) => {
  let enderecos = await endereco_repository.getByClientId(id);
  //Sem o índice, ele retorna dois arrays com o mesmo coteúdo
  console.log(enderecos[0]);
  return;
};

exports.update = async (endereco) => {
  await endereco_repository.update(endereco);
}