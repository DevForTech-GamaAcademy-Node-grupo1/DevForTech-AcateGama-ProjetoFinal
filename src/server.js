require('dotenv').config()
const express = require('express');
const app = express();
//const cors = require('cors');
const port = process.env.APP_PORT || 3333;
const session = require('express-session');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger_output.json')

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 5
    },
}));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
//app.use(cors())
//const router = express.Router();

const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produto-route');
const marcaRoute = require('./routes/marca-route');
const contatoRoute = require('./routes/contato-route');
const clienteRoute = require('./routes/cliente-route');
const enderecoRoute = require('./routes/endereco-route');
const pedidoRoute = require('./routes/pedido.route');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'oi' });
});
const pagamentoRoute = require('./routes/pagamento-route');

//Carrega as Rotas
app.use('/', indexRoute);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);
app.use('/marcas', marcaRoute);
app.use('/contato', contatoRoute);
app.use('/endereco', enderecoRoute);
app.use('/pedido', pedidoRoute);
app.use('/pagamento', pagamentoRoute)

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});