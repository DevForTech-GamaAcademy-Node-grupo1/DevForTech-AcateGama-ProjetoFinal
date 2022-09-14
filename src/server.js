require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3333;
const http = require('http');

app.use(express.json())

const server = http.createServer(app);
const router = express.Router();

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const marcaRoute = require('./routes/marca-route');

//Carrega as Rotas
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/marcas', marcaRoute);

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});