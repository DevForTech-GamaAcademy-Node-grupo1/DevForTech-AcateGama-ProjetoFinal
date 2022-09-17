const pedidos_service = require('../services/pedidos-service');

exports.create = async (req, res) => {
  if (!(req.body.id != '' && (typeof (req.body.id) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    pedidos_service.createPedidos(req.body.id);
    res.status(200).json({ message: 'pedidos criada' });
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
    pedidos_service.updateById(req.params);
    res.status(200).json({ message: 'pedidos atualiza' });
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
    await pedidos_service.deletePedidosById(req.params.id);
    res.status(200).json({ message: 'pedidos deletada' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await pedidos_service.findAllPedidos());
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
    res.status(200).json(await pedidos_service.findPedidosById(req.params.id));
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectByClienteId = async (req, res) => {
    console.log(req.params.id);
    if (!(req.params.id && !(isNaN(req.params.id)))) {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
    try {
      res.status(200).json(await pedidos_service.findPedidosByClienteId(req.params.id));
    }
    catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Alguma coisa deu errado' });
    }
  }

  exports.selectByPedidoId = async (req, res) => {
    console.log(req.params.id);
    if (!(req.params.id && !(isNaN(req.params.id)))) {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
    try {
      res.status(200).json(await pedidos_service.findPedidosByPedidoId(req.params.id));
    }
    catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Alguma coisa deu errado' });
    }
  }