const endereco_service = require('../services/endereco-service');

function _validaEndereco(endereco) {
  return !Object.keys(endereco).some(el => {
    if (el == 'numero' || el == 'cep') {
      if (endereco[el] == '' || isNaN(endereco[el])) {
        console.log(`${el}:${endereco[el]} não é um número`);
        return true;
      }
    }
    else if (el != 'complemento') {
      if (endereco[el] == '' || !(typeof (endereco[el]) === 'string')) {
        console.log(`${el}:${endereco[el]} não é uma string`);
        return true;
      }
    }
  });
}

exports.create = async (req, res) => {
  if (req.body.clienteId == '' || isNaN(req.body.clienteId)) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  else {
    let endereco = {};
    endereco.rua = req.body.rua;
    endereco.numero = req.body.numero;
    endereco.bairro = req.body.bairro;
    endereco.complemento = req.body.complemento;
    endereco.cidade = req.body.cidade;
    endereco.estado = req.body.estado;
    endereco.cep = req.body.cep;
    
    if (_validaEndereco(endereco)) {
      endereco_service.create(endereco, req.body.clienteId)
        .then(() => {
          res.status(200).json({ message: 'Endereco criado' });
        })
        .catch(e => {
          console.log(e);
          res.status(500).json({ message: e });
        });      
    }
    else {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
  }
}

exports.update = async (req, res) => {
  if (req.params.id == '' || isNaN(req.params.id)) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  else {
    let endereco = {};
    endereco.id = req.params.id;
    endereco.rua = req.body.rua;
    endereco.numero = req.body.numero;
    endereco.bairro = req.body.bairro;
    endereco.complemento = req.body.complemento;
    endereco.cidade = req.body.cidade;
    endereco.estado = req.body.estado;
    endereco.cep = req.body.cep;

    if (_validaEndereco(endereco)) {
      endereco_service.update(endereco)
        .then(() => {
          res.status(200).json({ message: 'Endereco atualizado' });
        })
        .catch(e => {
          console.log(e);
          res.status(500).json({ message: e });
        });
    }
    else {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
  }
}

exports.delete = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    endereco_service.delete(req.params.id)
      .then(() => {
        res.status(200).json({ message: 'endereco deletado' });
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: e });
      });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await endereco_service.findAll());
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectById = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    endereco_service.findById(req.params.id)
      .then((endereco) => {
        res.status(200).json(endereco);
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: e });
      });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectByClienteId = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    endereco_service.findByClienteId(req.params.id)
      .then((enderecos) => {
        res.status(200).json(enderecos);
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: e });
      });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}