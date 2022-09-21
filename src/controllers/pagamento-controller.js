const pagamento_service = require('../services/pagamento-service');

exports.create = async (req, res) => {
  if (!(req.body)) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
    pagamento_service.createPagamento(req.body).then(() => {
        res.status(200).json({ message: 'pagamento criado' })
    }
        )
    .catch(e => {
        console.log(e);
        res.status(500).json({ message: 'Alguma coisa deu errado', error: e });
    }
    )
    
    
}

exports.updateById = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
    pagamento_service.updateById(req.params).then(() => {
        res.status(200).json({ message: 'pagamento atualiza' });
    }).catch(e => {
        console.log(e);
        res.status(500).json({ message: 'Alguma coisa deu errado' , error: e});
    })
}

exports.deleteById = async (req, res) => {
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
    await pagamento_service.deletePedidoById(req.params.id).then(()=>{
        res.status(200).json({ message: 'pedido deletada' });
    }).catch(e =>{
        console.log(e);
        res.status(500).json({ message: 'Alguma coisa deu errado' ,error: e});
    })
}

exports.selectAll = async (req, res) => {
    await pagamento_service.findAllPagamento().then(resultado=>{
        return res.status(200).json(resultado);
    }).catch(e => {
        console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' ,error: e});
    })
}

exports.selectById = async (req, res) => {
  console.log(req.params.id);
  if (!(req.params.id && !(isNaN(req.params.id)))) {
    res.status(400).json({ message: 'formato inválido' });
    return;
  }
  
    await pagamento_service.findPagamentoById(req.params.id).then(resultado => {
        return res.status(200).json(resultado)
    }).catch(e => {
        console.log(e);
    res.status(500).json({ message: 'Alguma coisa deu errado' ,error: e});
    })
}