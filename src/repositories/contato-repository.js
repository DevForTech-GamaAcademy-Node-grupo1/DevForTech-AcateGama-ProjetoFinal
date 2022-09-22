const { Contato, Contatos } = require('../database/models/index');

exports.getById = async (id) => {
  let contato = await Contato.findByPk(id, { attributes: ["id","numero"], raw :true });
  return JSON.stringify(contato);
}

exports.getAll = async () => {
  let contatos = await Contato.findAll({ attributes: ["id","numero"], raw :true });
  return JSON.stringify(contatos);
}

exports.create = async (contato, clienteId) => {
  Contato.create({
    numero: contato.numero
  })
    .then(contato => {
      Contatos.create({
        clienteId: clienteId,
        contatoId: contato.id
      });
      console.log('contato criado');
    })
    .catch(e => {
      console.log(e);
      throw e;
    });
}

exports.updateContato = async (contatoToUpdate) => {
  let contato = await Contato.findByPk(contatoToUpdate.id);
  if (!contato) {
    throw 'Contato não encontrado.'
  }
  await contato.update(contatoToUpdate)
}

exports.deleteById = async (id) => {
  await Contato.destroy({ where: { id: id } });
}