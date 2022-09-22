const contato_service = require('../services/contato-service')

exports.create = async (req, res) => {
  //contato_service.create(req.body, req.session.cliente.id)
  contato_service.create(req.body, 1)
    .then(() => {
      res.status(200).json({ message: 'contato criado' });
    }).catch(e => {
      console.log(e);
      res.status(500).json(e);
    })
}

exports.deleteById = async (req, res) => {
  contato_service.deleteById(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'contato deletado' });
    }).catch(err => {
      res.status(500).json(err);
    });
}

exports.selectAll = async (req, res) => {
  contato_service.findAll()
    .then(obj => {
      res.status(200).json(obj)
    }).catch(err => {
      res.status(500).json(err)
    })
}

exports.selectById = async (req, res) => {
  let id = Number(req.params.id);

  contato_service.findById(id)
    .then(obj => {
      res.status(200).json(obj)
    }).catch(err => {
      res.status(500).json(err)
    })
}

exports.updateById = async (req, res) => {
  let contato = {};
  contato.id = req.params.id;
  contato.numero = req.body.numero;
  contato_service.updateContato(contato)
    .then(() => {
      res.status(200).json({ message: 'contato atualizado' });
    }).catch(err => {
      res.status(500).json(err);
    })
}