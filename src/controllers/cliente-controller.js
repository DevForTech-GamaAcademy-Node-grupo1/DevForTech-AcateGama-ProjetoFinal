const cliente_service = require('../services/cliente-service');

exports.create = async (req, res) => {
  let cliente = {};
  cliente.email = req.body.email;
  cliente.senha = req.body.senha;
  cliente.nome = req.body.nome;
  cliente.cpf = req.body.cpf;

  cliente_service.create(cliente)
    .then(() => {
      res.status(200).json({ message: 'Cliente criado' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json({ message: e });
    });
}

exports.updateById = async (req, res) => {
  let cliente = {};
  cliente.id = req.session.cliente.id;
  req.body.email != '' ? cliente.email = req.body.email : '';
  req.body.nome != '' ? cliente.nome = req.body.nome : '';
  req.body.cpf != '' ? cliente.cpf = req.body.cpf : '';

  cliente_service.updateById(cliente)
    .then(() => {
      res.status(200).json({ message: 'cliente atualizado' });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.deleteById = async (req, res) => {

  cliente_service.deleteById(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'cliente deletado' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.deleteByEmail = async (req, res) => {
  cliente_service.deleteByEmail(req.params.email)
    .then(() => {
      res.status(200).json({ message: 'cliente deletado' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await cliente_service.findAll());
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectById = async (req, res) => {
  try {
    res.status(200).json(await cliente_service.findById(req.params.id));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectByName = async (req, res) => {
  try {
    res.status(200).json(await cliente_service.findByName(req.params.nome));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectByEmail = async (req, res) => {
  try {
    res.status(200).json(await cliente_service.findByEmail(req.params.email));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.selectByCPF = async (req, res) => {
  try {
    res.status(200).json(await cliente_service.findByCPF(req.params.cpf));
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

exports.authenticate = async (req, res) => {
  cliente = {};
  cliente.email = req.body.email;
  cliente.senha = req.body.senha;

  cliente_service.authenticateByEmail(cliente)
    .then((cliente) => {
      req.session.cliente = {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        permissao: cliente.permissao,
      }
      res.status(202).json({ message: 'Sessão de cliente criada' });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json({ message: e });
    });
}

exports.logout = async (req, res) => {
  if (req.session.cliente) {
    req.session.cliente = undefined;
    res.status(200).json({ message: 'Sessão do cliente destruida' });
  }
  else {
    res.status(404).json({ message: 'Cliente não está logado' });
  }
}