const pagamento_repository = require('../repositories/pagamento-repository');

async function createPagamento(dados) {
  await pagamento_repository.createPagamento(dados);
}

async function deletePagamentoById(id) {
  if (await pagamento_repository.getPagamentoById(id)) {
    await pagamento_repository.deletePagamentoById(id);
    return;
  }
  console.log('Pagamento não encontrado');
}

async function findAllPagamento() {
  let pagamentos = await pagamento_repository.getAllPagamento();
  console.log(pagamentos);
  return pagamentos;
}

async function findPagamentoById(id) {
  let pagamento = await pagamento_repository.getPagamentoById(id);
  if (pagamento) {
    console.log('Pagamento encontrado');
    return pagamento;
  }
  console.log('Pagamento não encontrado');
  return null;
}

async function updatePagamento(dados) {
  await pagamento_repository.updatePagamento(dados);
}

module.exports = {
    createPagamento,
    deletePagamentoById,
    findAllPagamento,
    findPagamentoById,
    updatePagamento
}