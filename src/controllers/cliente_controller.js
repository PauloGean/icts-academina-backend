const clienteDao = require('../dao/cliente_dao')


function getClientes(request, response) {
    clienteDao.listarClientes().then((d) => {
        response.send(d);
    })
}

function createCliente(request, response) {
    var dados = request.body
    console.log(dados)
    clienteDao.insertCliente(dados).then((d) => {
        var id = d[0]['insertId']
        console.log(id)

        clienteDao.buscarCliente(id).then((cliente) => {
            response.send(cliente[0]);
        });
    })
}

module.exports = { getClientes, createCliente }