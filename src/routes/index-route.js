const express = require('express');
const router = express.Router();
const axios = require('axios');

async function getProduto(id) {
    let produto;

    try {
        const response = await axios.get('http://localhost:3333/produto/' + id);
        produto = response.data;
    } catch (error) {
        console.log("erro", error);
        produto = [
            { nome: "Bota Bradok Eldorado Good Yellow - Amarelo", modelo: "Bradok", valor: 442 }
        ];
    }
    return produto;
}

async function getEndereco(id) {
    let endereco;

    try {

        const response = await axios.get('http://localhost:3333/endereco/cliente/' + id);
        endereco = response.data;
    } catch (error) {
        console.log("erro", error);
        endereco = [
            {
                "clienteId": 2,
                "enderecoId": 1,
                "id": 1,
                "rua": "Rua marajos",
                "numero": 123,
                "bairro": "Lagoa Azul",
                "complemento": "Casa amarela",
                "cidade": "Natal",
                "estado": "RN",
                "cep": 59000000,
            }
        ];
    }
    return endereco[0];
}

router.get('/', async (req,res) => {
    let produtos;
    try {        
        const response = await axios.get('http://localhost:3333/produto?size=100&pagina=1&order=desc&col=valor');
        produtos = response.data;
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

    res.render('home', {
        products: produtos
    });

});

router.get('/produto-pagina/:id', async (req, res) => {
    let d = req.params.id;
    let produto = await getProduto(d);
    res.render('product-page', {
        product: produto
    });

});

router.get('/pagamento/:id', async (req, res) => {
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
    let endereco = await getEndereco(cliente.id);
    
    res.render('checkout-page', {
        product: produto,
        cliente: cliente,
        address: endereco
    });

});

router.post('/create-pedido', async (req, res) => {
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
        quantidade: produto.quantidade,
        clienteId: req.session.cliente.id
    }).then((response) => {
        if (response.status == 200) {
            res.redirect('/confirmacao-pedido');
        }
    });

});

router.get('/sobre', (req, res) => {
    res.render('about');
});

router.get('/entrar', (req, res) => {
    res.render('login');
});

router.get('/cadastro', (req, res) => {
    res.render('client-register');
});

router.get('/contato-pagina', (req, res) => {
    res.render('contact');
});

router.get('/pagamento', (req, res) => {
    res.render('checkout-page');
});

router.get('/produto-pagina', (req, res) => {
    res.render('product-page');
});

router.get('/cadastro-produto', (req, res) => {
    res.render('product-register');
});

router.get('/cadastro-pedido', (req, res) => {
    res.render('request-register');
});

router.get('/pedidos-pagina', (req, res) => {
    res.render('requests');
});

router.get('/clientes-pagina', (req, res) => {
    res.render('clients');
});

router.get('/confirmacao-pedido', (req, res) => {
    res.render('sucess');
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