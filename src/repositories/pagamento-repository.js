const { Pagamento } = require('../database/models/index');

exports.getPagamentoById = async (id) => {
  let pagamento = await Pagamento.findByPk(id);
  return pagamento;
}

exports.getAllPagamento = async () => {
  let pagamentos = await Pagamento.findAll();
  return pagamentos;
}

exports.createPagamento = async (dadosPagamento) => {
  Pagamento.create({
    valor: dadosPagamento.valor,
    data: Date.now(),
    status_pagamento: dadosPagamento.status_pagamento,
    status_geral: dadosPagamento.status_geral,
    tipo_pagamento: dadosPagamento.tipo_pagamento
    
  }).then(pagamento => {
    console.log('Pagamento criada.');
  })
  .catch((e) => {
    console.log(e);
  });
}

exports.updatePagamento = async (PagamentoToUpdate) => {
  let pagamento = await Pagamento.findByPk(PagamentoToUpdate.id);
  pagamento = PagamentoToUpdate;
  await Pagamento.save();
}

exports.deletePagamento = async (id) => {
  let pagamento = await Pagamento.findByPk(id);
  await pagamento.destroy();
}