function adminAuth(req, res, next) {
  if (req.session.cliente) {
    if (req.session.cliente.permissao == 1) {
      next();
    }
    else { 
      res.json({ message: 'Usuário sem permissão' });  
    }

  }
  else {
    res.json({ message: 'Não logado' });
  }
}

module.exports = adminAuth;