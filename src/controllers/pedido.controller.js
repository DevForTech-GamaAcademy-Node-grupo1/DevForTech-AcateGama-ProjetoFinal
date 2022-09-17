const pedido_service = require('../services/pedido-service');

exports.create = async (req, res) => {
  if (!(req.body.nome != '' && (typeof (req.body.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    pedido_service.createPedido(req.body.nome);
    res.status(200).json({ message: 'pedido criado' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.updateById = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    pedido_service.updateById(req.params);
    res.status(200).json({ message: 'pedido atualiza' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.deleteById = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    await pedido_service.deletePedidoById(req.params.id);
    res.status(200).json({ message: 'pedido deletada' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.deleteByName = async (req, res) => {
  if (!(req.params.nome != '' && (typeof (req.params.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    pedido_service.deletePedidoByName(req.params.nome);
    res.status(200).json({ message: 'pedido deletado' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await pedido_service.findAllPedido());
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectById = async (req, res) => {
  console.log(req.params.id);
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    res.status(200).json(await pedido_service.findPedidoById(req.params.id));
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectByName = async (req, res) => {
  console.log(req.params.nome);
  if (!(req.params.nome != '' && (typeof (req.params.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    res.status(200).json(await pedido_service.findPedidoByName(req.params.nome));
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}