const marca_service = require('../services/marca-service');

exports.create = async (req, res) => {
  marca_service.create(req.body.nome)
    .then(() => {
      res.status(200).json({ message: 'marca criada' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.updateById = async (req, res) => {
  let marca = {};
  marca.id = req.params.id;
  marca.nome = req.body.nome;
  marca_service.updateMarca(marca)
    .then(() => {
      res.status(200).json({ message: 'marca atualizada' });
    })
    .catch (e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.deleteById = async (req, res) => {
  
  marca_service.deleteById(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'marca deletada' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.deleteByName = async (req, res) => {

  marca_service.deleteByName(req.params.nome)
    .then(() => {
      res.status(200).json({ message: 'marca deletada' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await marca_service.findAll());
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectById = async (req, res) => {
  console.log(req.params.id);
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    res.status(200).json(await marca_service.findById(req.params.id));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectByName = async (req, res) => {
  console.log(req.params.nome);
  if (!(req.params.nome != '' && (typeof (req.params.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    res.status(200).json(await marca_service.findByName(req.params.nome));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}