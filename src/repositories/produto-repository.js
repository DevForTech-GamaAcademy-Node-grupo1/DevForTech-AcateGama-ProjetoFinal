const { Marca, Produto } = require('../database/models/index');

async function getProdutoById(id) {
  let produto = await Produto.findByPk(id);
  return produto;
}

async function getProdutoByName(nome) {
  let produto = await Produto.findOne({ where: { nome: nome } });
  if (!produto) {
    return null;
  }
  console.log(produto);
  return produto;
}

async function getAllProduto(size, offset, order, col) {
  let produtos = await Produto.findAll(
    { attributes: ["nome", "quantidade", "valor"], include: [{ model: Marca, attributes: ["id", "nome"] }], order: [[col, order]], limit: size, offset: offset });

  return produtos;
}

async function createProduto(produto) {
  Produto.create({
    nome: produto.nome,
    valor: produto.valor,
    quantidade: produto.quantidade,
    modelo: produto.modelo,
    marcaId: produto.marcaId
  })
    .then(() => {
      console.log('Produto criado');
    })
    .catch((e) => {
      console.log(e);
    });
}

async function updateProduto(id, produtoToUpdate) {
  let produto = await Produto.findByPk(id.id);
  await produto.update(produtoToUpdate);
  await produto.save();
  return produto;
}

async function deleteProduto(id) {
  let produto = await Produto.findByPk(id);
  await produto.destroy();
}

module.exports = {
  getProdutoById,
  getProdutoByName,
  getAllProduto,
  createProduto,
  updateProduto,
  deleteProduto
}