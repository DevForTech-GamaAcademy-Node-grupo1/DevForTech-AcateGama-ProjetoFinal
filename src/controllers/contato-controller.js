const contato_service = require('../services/contato-service')

exports.create = async (req, res) => {
  
    if (!(req.body.numero != '' && (typeof (req.body.numero) === 'string'))) {
        res.status(400).json({ message: 'formato inválido' });
        return;
    }

      contato_service.createContato(req.body, req.session.id ).then(() =>{

        res.status(200).json({ message: 'contato criado' });

      }).catch(err => {
        res.status(500).json(err);
      })
}

exports.deleteById = async (req, res) => {
    if ((!req.params.id || isNaN(req.params.id))) {
        res.status(400).json({ message: 'formato inválido' });
        return;
    }
    let id = Number(req.params.id);

    contato_service.deleteContato(id).then(() =>{

        res.status(200).json({ message: 'contato deletado' });

      }).catch(err => {
        res.status(500).json(err);
      })

}


exports.selectAll = async (req, res) => {

    await contato_service.findAllContato(obj =>{
    }).then(obj => {
    res.status(200).json(obj)
    }).catch(err => {
        res.status(500).json(err)
    })
}


exports.selectById = async (req, res) => {

    if ((!req.params.id || isNaN(req.params.id))) {
        res.status(400).json({ message: 'formato inválido' });
        return;
    }
    let id = Number(req.params.id);

    

    await contato_service.findContatoById(id)
    .then(obj => {
    res.status(200).json(obj)
    }).catch(err => {
        res.status(500).json(err)
    })
}


exports.updateById = async (req, res) => {

   if ((!req.params.id || isNaN(req.params.id))) {
        res.status(400).json({ message: 'formato inválido' });
        return;
    }

    if (!(req.body.numero != '' && (typeof (req.body.numero) === 'string'))) {
        res.status(400).json({ message: 'formato inválido' });
        return;
    }

      contato_service.updateContato(req.body).then(() =>{

        res.status(200).json({ message: 'contato atualizado' });

      }).catch(err => {
        res.status(500).json(err);
      })
}



