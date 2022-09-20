const cliente_service = require('../services/cliente-service');

exports.create = async (req, res) => {
  if (!(req.body.nome != '' && (typeof (req.body.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    cliente_service.createCliente(req.body.nome);
    res.status(200).json({ message: 'cliente criada' });
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
  console.log(req.params.id);
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
  console.log(req.params.nome);
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
    console.log(req.params.email);
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
    console.log(req.params.cpf);
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