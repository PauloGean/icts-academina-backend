const express = require('express')
const banco = require('./banco.js')
const port=3005
var server = express();

server.get('/', function (request, response) {
    response.send('Olá, Mundo!');
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
    var r=banco.listarClientes();
    response.send(r);
});

server.listen(port, function () {
    console.log("rodando na porta " + port)
})
