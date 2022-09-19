
const produto_repository = require('../repositories/produto-repository');
const marca_repository = require('../repositories/marca-repository');

async function createProduto(produto) {
  let marca
  if ( await produto_repository.getProdutoByName(produto.nome)!= "null") {
   throw {message: "produto já existe!"}
  }
  if(await marca_repository.getMarcaByName(produto.marca) == produto.marca){
    marca = await marca_repository.getMarcaByName(produto.marca)
    produto.marcaId= marca.id
    
  }else{
    await marca_repository.createMarca(produto.marca);
    marca = await marca_repository.getMarcaByName(produto.marca)
    produto.marcaId= marca.id
  }
  await marca_repository.getMarcaByName(produto.marca)
  await produto_repository.createProduto(produto);
}

async function deleteProdutoById(id) {
  if (await produto_repository.getProdutoById(id)) {
    await produto_repository.deleteProduto(id);
    return;
  }
  console.log('Produto não encontrado');
}

async function findAllProduto(size, pagina, order, col) {
  const offset = pagina== 1 ? 0 : (pagina - 1)* size;
  let produtos
  console.log("ORDER",order)
  console.log("col",col)
  if(order.toLowerCase() == "asc" && col.toLowerCase() == "nome"){
    produtos = await produto_repository.getAllProduto(size, offset,order,col)
  }
  if((order).toLowerCase() == "desc" && col.toLowerCase() == "nome"){
    produtos = await produto_repository.getAllProduto(size, offset,order, col)
  }
  if(order.toLowerCase() == "asc" && col.toLowerCase() == "valor"){
    produtos = await produto_repository.getAllProduto(size, offset, order, col)
  }
  if(order.toLowerCase() == "desc" && col.toLowerCase() == "valor"){
    produtos = await produto_repository.getAllProduto(size, offset, order, col)
  }
  
  console.log(produtos);
  
  return JSON.parse(JSON.stringify(produtos));
}

async function findProdutoById(id) {
  let produto = await produto_repository.getProdutoById(id);
  if (produto) {
    console.log('produto encontrado');
    return JSON.parse(produto);
  }
  console.log('produto não encontrado');
}

async function updateProduto(id, produto) {
  console.log("SERVICE", id);
  console.log("SERVICE", produto);

  produto_repository.updateProduto(id, produto);
}

module.exports = {
    createProduto,
    deleteProdutoById,
    findAllProduto,
    findProdutoById,
    updateProduto
};