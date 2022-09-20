function clienteAuth(req, res, next) {
  if (req.session.cliente) {
    next();
  }
  else {
    res.json({ message: 'Não logado' });
  }
}

module.exports = clienteAuth;