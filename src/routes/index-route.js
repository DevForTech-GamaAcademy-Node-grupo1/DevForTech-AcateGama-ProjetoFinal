const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req,res) => {
    let produtos;

    try {        

        const response = await axios.get('http://localhost:3333/produto?size=100&pagina=1&order=desc&col=valor');
        console.log("DATA: ",response.data);
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

    res.render('../views/home', {
        products: produtos
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

//     res.render('../views/home', {
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

//     res.render('../views/home', {
//         requests: pedidos
//     });

// });

module.exports = router;