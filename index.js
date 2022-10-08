const express = require('express')
var cors = require('cors')
const banco = require('./banco.js')

const port=3005
var server = express();
server.use(express.json())
server.use(cors())

server.get('/', function (request, response) {
    response.send('Olá, Mundo!');
});

server.get('/icts', function (request, response) {
    response.send('Curso de fullstack');
});


server.post('/icts', function (request, response) {
    response.send('Curso de fullstack- POST');
});



server.get('/nome', function (request, response) {
    response.send('Meu nome é Paulo');
});

server.post('/nome', function (request, response) {
    response.send('Seu nome é Paulo');
});

server.get('/cliente', function (request, response) {
    banco.listarClientes().then((d)=>{
        response.send(d);
    })    
});

server.post('/cliente', function (request, response) {
    var dados= request.body
    console.log(dados)
    banco.insertCliente(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        banco.buscarCliente(id).then((cliente)=>{
            response.send(cliente[0]);
        });
    })  
});


server.listen(port, function () {
    console.log("rodando na porta " + port)
})
