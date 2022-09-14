const marca_service = require('../services/marca-service');

exports.create = async (req, res) => {
  if (!(req.body.nome != '' && (typeof (req.body.nome) === 'string'))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  try {
    marca_service.createMarca(req.body.nome);
    res.status(200).json({ message: 'marca criada' });
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
    marca_service.updateById(req.params);
    res.status(200).json({ message: 'marca atualiza' });
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
    await marca_service.deleteMarcaById(req.params.id);
    res.status(200).json({ message: 'marca deletada' });
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
    marca_service.deleteMarcaByName(req.params.nome);
    res.status(200).json({ message: 'marca deletada' });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}

exports.selectAll = async (req, res) => {
  try {
    res.status(200).json(await marca_service.findAllMarca());
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
    res.status(200).json(await marca_service.findMarcaById(req.params.id));
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
    res.status(200).json(await marca_service.findMarcaByName(req.params.nome));
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' });
  }
}