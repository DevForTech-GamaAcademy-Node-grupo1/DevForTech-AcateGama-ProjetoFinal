const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req,res) => {
    let produtos;

    try {        

        const response = await axios.get('http://localhost:3333/produto?size=100&pagina=1&order=desc&col=valor');
        console.log("DATA: ",response.data);
        produtos = response.data;
        console.log("PRODUTO: ",produtos)
    } catch (error) {
        console.log("erro",error);
        produtos = [
            {nome: "Tenis preto", modelo: "nike", valor: 378},
            {nome: "Tenis branco", modelo: "nike", valor: 323},
            {nome: "Sapatenis", modelo: "adida", valor: 123},
            {nome: "olimpicos", modelo: "modelo 22", valor: 170},
            {nome: "Tenis", modelo: "nike", valor: 69}
        ];
    }

    res.render('../views/home', {
        products: produtos
    });

});

async function getProduto(id){
    let produto;

    try {        

        const response = await axios.get('http://localhost:3333/produto/' + id);
        console.log("DATA: ",response.data);
        produto = response.data;
    } catch (error) {
        console.log("erro",error);
        produto = [
            {nome: "Bota Bradok Eldorado Good Yellow - Amarelo", modelo: "Bradok", valor: 442}
        ];
    }
    console.log("GET PRODUTO = ",produto)
    return produto;
}

async function getEndereco(id){
    let endereco;

    try {        

        const response = await axios.get('http://localhost:3333/endereco/cliente/' + id);
        console.log("DATA: ",response.data);
        endereco = response.data;
    } catch (error) {
        console.log("erro",error);
        endereco = [
            {"clienteId": 2,
            "enderecoId": 1,
            "id": 1,
            "rua": "Rua marajos",
            "numero": 123,
            "bairro": "Lagoa Azul",
            "complemento": "Casa amarela",
            "cidade": "Natal",
            "estado": "RN",
            "cep": 59000000,
            "createdAt": "2022-09-22T23:06:05.000Z",
            "updatedAt": "2022-09-22T23:06:05.000Z"}
        ];
    }
    console.log("GET PRODUTO = ",endereco)
    return endereco[0];
}

router.get('/produto-pagina/:id', async (req,res) => {
    let d = req.params.id;
    let produto = await getProduto(d);
    console.log("PRODUTO PAGINA",produto)
    res.render('../views/product-page', {
        product: produto
    });

});

router.get('/pagamento/:id', async (req,res) => {
    let mockCliente = 
        {
            "id": 2,
            "email": "teste@gmail.com",
            "nome": "Teste da silva alves",
            "cpf": "15825865799",
            "permissao": 0,
            "createdAt": "2022-09-22T13:43:38.000Z",
            "updatedAt": "2022-09-22T13:43:38.000Z"
        };

    let d = req.params.id;
    let produto = await getProduto(d);
    let cliente = req.session.cliente ? req.session.cliente : mockCliente;
    console.log("CLIENTE PAGAOMENTO = ", cliente)
    let endereco = await getEndereco(cliente.id);
    console.log(cliente.id)
    console.log(endereco)
    

    res.render('../views/checkout-page', {
        product: produto,
        cliente: cliente,
        address: endereco
    });

});

router.post('/create-pedido', async (req,res) => {
    let pedido = {};
    let produto = {};
    pedido.valor_total = req.body.valor_total;
    pedido.status_geral = req.body.status_geral;
    pedido.enderecoId = req.body.enderecoId;
    produto.id = req.body.id;
    produto.quantidade = req.body.quantidade;

    const response = await axios.post('http://localhost:3333/pedido/', {
        valor_total: pedido.valor_total,
        status_geral: pedido.status_geral,
        enderecoId: pedido.enderecoId,
        id: produto.id,
        quantidade:produto.quantidade
    }).then(function(response){        
        res.redirect('/confirmacao-pedido');
    });

});

// router.get('/clientes-pagina', async (req,res) => {
//     let clientes;

//     try {        

//         const response = await axios.get('http://localhost:3333/clientes?');
//         console.log("DATA: ",response.data);
//         clientes = response.data;
//     } catch (error) {
//         console.log("erro",error);
//         clientes = [
//             {nome: "Carla Ferreira", email: "carlinha@gmail.com", cpf: 15825865799},
//             {nome: "Lucas Alves", email: "lulu.alves@gmail.com", cpf: 76525865799},
//             {nome: "Luana Mello Ferreira", email: "mel@hotmail.com", cpf: 15833365799},
//             {nome: "Gabriel Pereira", email: "biel.pepe@bol.com", cpf: 15221865799}
//         ];
//     }

//     res.render('../views/clients', {
//         clients: clientes
//     });

// });

// router.get('/pedidos-pagina', async (req,res) => {
//     let pedidos;

//     try {        

//         const response = await axios.get('http://localhost:3333/pedidos?');
//         console.log("DATA: ",response.data);
//         pedidos = response.data;
//     } catch (error) {
//         console.log("erro",error);
//         pedidos = [
//             {valor_total: 348, descricao: "Tênis Nike Revolution 6 Next Nature Masculino - Preto+Branco", status_geral: 1},
//             {valor_total: 547, descricao: "Tênis Asics Gel-Impression 10 Feminino - Preto", status_geral: 0},
//             {valor_total: 1200, descricao: "Chuteira Society Penalty Rx Locker XXI Penalty - Laranja + Chuteira Penalty RX Locker XXI Society Amarela - Amarelo", status_geral: 1}
//         ];
//     }

//     res.render('../views/requests', {
//         requests: pedidos
//     });

// });

module.exports = router;