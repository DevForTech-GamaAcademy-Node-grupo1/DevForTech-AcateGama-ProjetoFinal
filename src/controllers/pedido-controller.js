const pedido_service = require('../services/pedido-service');

exports.create = async (req, res) => {
  let pedido = {};
  let produto = {};
  pedido.valor_total = req.body.valor_total;
  pedido.status_geral = req.body.status_geral;
  pedido.enderecoId = req.body.enderecoId;
  produto.id = req.body.id;
  produto.quantidade = req.body.quantidade;
  clienteId = req.body.clienteId;
  pedido_service.create(pedido, produto, clienteId)
    .then(() => {
      res.status(200).json({ message: 'pedido criado' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.updateById = async (req, res) => {
  let pedido = {};
  pedido.id = req.params.id;
  pedido.status_geral = req.body.status;
  
  pedido_service.updatePedido(pedido)
    .then(() => {
      res.status(200).json({ message: 'pedido atualizado' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.deleteById = async (req, res) => {
  pedido_service.deleteById(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'pedido deletado' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await pedido_service.getAll());
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectById = async (req, res) => {
  try {
    res.status(200).json(await pedido_service.getById(req.params.id));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}