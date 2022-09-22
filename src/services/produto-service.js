
const produto_repository = require('../repositories/produto-repository');
const marca_repository = require('../repositories/marca-repository');

exports.createProduto = async (produto) => {
  if ( await produto_repository.getProdutoByName(produto.nome)) {
    throw { message: "produto já existe!" };
  }
  await marca_repository.getByNameOrCreate(produto.marca)
    .then((marca) => {
      produto.marcaId = marca.id;
    })
    .catch(e => {
      console.log(e);
      throw { message: e };
    });
  await produto_repository.createProduto(produto);
}

exports.deleteProdutoById = async (id) => {
  if (await produto_repository.getProdutoById(id)) {
    await produto_repository.deleteProduto(id);
    return;
  }
  console.log('Produto não encontrado');
}

exports.findAllProduto = async (size, pagina, order, col) => {
  const offset = pagina== 1 ? 0 : (pagina - 1)* size;
  let produtos;
  console.log("ORDER", order);
  console.log("col", col);
  if(order.toLowerCase() == "asc" && col.toLowerCase() == "nome"){
    produtos = await produto_repository.getAllProduto(size, offset, order, col);
  }
  if((order).toLowerCase() == "desc" && col.toLowerCase() == "nome"){
    produtos = await produto_repository.getAllProduto(size, offset, order, col);
  }
  if(order.toLowerCase() == "asc" && col.toLowerCase() == "valor"){
    produtos = await produto_repository.getAllProduto(size, offset, order, col);
  }
  if(order.toLowerCase() == "desc" && col.toLowerCase() == "valor"){
    produtos = await produto_repository.getAllProduto(size, offset, order, col);
  }
  
  console.log(produtos);
  
  return JSON.parse(JSON.stringify(produtos));
}

exports.findProdutoById = async (id) => {
  let produto = await produto_repository.getProdutoById(id);
  if (produto) {
    console.log('produto encontrado');
    return produto;
  }
  console.log('produto não encontrado');
  throw { message: "produto não encontrado" };
}

exports.updateProduto = async (id, produto) => {
  produto_repository.updateProduto(id, produto);
}