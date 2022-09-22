require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3333;
const http = require('http');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 5
    },
}));

const server = http.createServer(app);
const router = express.Router();

const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produto-route');
const marcaRoute = require('./routes/marca-route');
const contatoRoute = require('./routes/contato-route');
const clienteRoute = require('./routes/cliente-route');
const enderecoRoute = require('./routes/endereco-route');

//Carrega as Rotas
app.use('/', indexRoute);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);
app.use('/marcas', marcaRoute);
app.use('/contato', contatoRoute);
app.use('/endereco', enderecoRoute);

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});