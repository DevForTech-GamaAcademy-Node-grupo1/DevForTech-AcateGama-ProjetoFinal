const cliente_service = require('../services/cliente-service');

function _validaCliente(cliente) {
  return !Object.keys(cliente).some(el => {
    if (el == 'cpf') {
      if (cliente[el] == '' || isNaN(cliente[el])) {
        console.log(`${el}:${cliente[el]} não é um número`);
        return true;
      }
    }
    else if (el != 'email') {
      if (cliente[el] == '' || !(typeof (cliente[el]) === 'string')) {
        console.log(`${el}:${cliente[el]} não é uma string`);
        return true;
      }
    }
    else if (el == 'email') {
      if (cliente[el] == '' ||
        !(typeof (cliente[el]) === 'string') ||
          (cliente[el].match(/^[A-Za-z0-9\_\.]*@[A-Za-z]*[\.][A-Za-z]*$/) == null)) {
        console.log(`${el}:${cliente[el]} não é um e-mail válido`);
        return true;
      }
    }
  });
}

exports.create = async (req, res) => {
  let cliente = {};
  cliente.email = req.body.email;
  cliente.senha = req.body.senha;
  cliente.nome = req.body.nome;
  cliente.cpf = req.body.cpf;
  
  if (_validaCliente(cliente)) {
    cliente_service.create(cliente)
      .then(() => {
        res.status(200).json({ message: 'Cliente criado' });
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: e });
      });
  }
  else {
    res.status(400).json({ message: 'formato inválido' });
  }
}

exports.updateById = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    cliente_service.updateById(req.params);
    res.status(200).json({ message: 'cliente atualizado' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.updateByEmail = async (req, res) => {
    if (!(req.params.email && !(isNaN(req.params.email)))) {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
    try {
      cliente_service.updateByEmail(req.params);
      res.status(200).json({ message: 'cliente atualizado' });
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
    await cliente_service.deleteClienteById(req.params.id);
    res.status(200).json({ message: 'cliente deletado' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.deleteByEmail = async (req, res) => {
  if (!(req.params.email != '' && (typeof (req.params.email) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    cliente_service.deleteClienteByEmail(req.params.email);
    res.status(200).json({ message: 'cliente deletado' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await cliente_service.findAllCliente());
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
    res.status(200).json(await cliente_service.findClienteById(req.params.id));
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectByName = async (req, res) => {
  if (!(req.params.nome != '' && (typeof (req.params.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    res.status(200).json(await cliente_service.findClienteByName(req.params.nome));
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectByEmail = async (req, res) => {
    if (!(req.params.email != '' && (typeof (req.params.email) === 'string'))) {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
    try {
      res.status(200).json(await cliente_service.findClienteByEmail(req.params.email));
    }
    catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Alguma coisa deu errado' });
    }
}

exports.selectByCPF = async (req, res) => {
    if (!(req.params.cpf != '' && (typeof (req.params.cpf) === 'string'))) {
      res.status(400).json({ message: 'formato inválido' });
      return;
    }
    try {
      res.status(200).json(await cliente_service.findClienteByCPF(req.params.cpf));
    }
    catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Alguma coisa deu errado' });
    }
}

exports.authenticate = async (req, res) => {
  cliente = {};
  cliente.email = req.body.email;
  cliente.senha = req.body.senha;

  if (_validaCliente(cliente)) {
    cliente_service.authenticateByEmail(cliente)
      .then((cliente) => {
        req.session.cliente = {
          id: cliente.id,
          nome: cliente.nome,
          email: cliente.email,
          permissao: cliente.permissao
        }
        res.status(202).json({ message: 'Sessão de cliente criada' });
      })
      .catch(e => {
        console.log(e);
        res.status(500).json({ message: e });
      });
  }
  else {
    res.status(400).json({ message: 'formato inválido' });
  }
}