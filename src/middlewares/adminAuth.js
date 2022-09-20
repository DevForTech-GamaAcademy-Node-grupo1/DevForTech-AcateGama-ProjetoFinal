function adminAuth(req, res, next) {
  if (req.session.cliente && req.session.cliente.permissao == 1) {
    next();
  }
  else {
    res.json({ message: 'Não logado' });
  }
}

module.exports = adminAuth;