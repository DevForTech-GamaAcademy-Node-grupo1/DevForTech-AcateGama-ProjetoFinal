require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3333;
const http = require('http');
const axios = require('axios');
const path = require('path');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
const session = require('express-session');

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 5
    },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const server = http.createServer(app);
const router = express.Router();

const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produto-route');
const marcaRoute = require('./routes/marca-route');
const contatoRoute = require('./routes/contato-route');
const clienteRoute = require('./routes/cliente-route');
const enderecoRoute = require('./routes/endereco-route');
const pedidoRoute = require('./routes/pedido.route');


//Carrega as Rotas
app.use('/', indexRoute);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);
app.use('/marcas', marcaRoute);
app.use('/contato', contatoRoute);
app.use('/endereco', enderecoRoute);
app.use('/cliente', clienteRoute);
app.use('/pedido', pedidoRoute);

app.get('/sobre', (req,res) => {
    res.render('../views/about');
});

app.get('/entrar', (req,res) => {
    res.render('../views/login');
});

app.get('/cadastro', (req,res) => {
    res.render('../views/client-register');
});

app.get('/contato-pagina', (req,res) => {
    res.render('../views/contact');
});

app.get('/pagamento', (req,res) => {
    res.render('../views/checkout-page');
});

app.get('/produto-pagina', (req,res) => {
    res.render('../views/product-page');
});

app.get('/cadastro-produto', (req,res) => {
    res.render('../views/product-register');
});

app.get('/cadastro-pedido', (req,res) => {
    res.render('../views/request-register');
});

app.get('/pedidos-pagina', (req,res) => {
    res.render('../views/requests');
});

app.get('/clientes-pagina', (req,res) => {
    res.render('../views/clients');
});

app.get('/confirmacao-pedido', (req,res) => {
    res.render('../views/sucess');
});


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});