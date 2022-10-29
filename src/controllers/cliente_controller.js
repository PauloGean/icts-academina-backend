
const clienteDao = require('../dao/cliente_dao')

function listarClientes(request, response) {
    clienteDao.getAll().then((d) => {
        response.send(d);
    })
}

function inserirCliente(request, response) {
    var dados = request.body
    console.log(dados)
    clienteDao.create(dados).then((d) => {
        console.log(d[0])
        var id = d[0]['insertId']
        console.log(id)

        clienteDao.findById(id).then((cliente) => {
            response.send(cliente[0]);
        });
    })
}

function buscarCliente(request, response) {
    var id = request.params.id
    clienteDao.findById(id).then((cliente) => {
        response.send(cliente[0]);
    });
}

function atualizarCliente(request, response) {
    var id = request.params.id
    var dados = request.body
    clienteDao.update(id, dados).then((cliente) => {
        clienteDao.findById(id).then((cliente) => {
            response.send(cliente[0]);
        });
    });
}


function deletarCliente(request, response) {
    var id = request.params.id
    clienteDao.remove(id).then((cliente) => {
        response.send({});
    });
}

module.exports={listarClientes,inserirCliente,buscarCliente,atualizarCliente,deletarCliente }
