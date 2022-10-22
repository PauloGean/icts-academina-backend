const clienteDao = require('../dao/cliente_dao')

function listarCliente(request, response) {
    clienteDao.listarClientes().then((d) => {
        response.send(d);
    })

}

function inserirCliente(request, response){
    var dados = request.body
    console.log(dados)
    clienteDao.insertCliente(dados).then((d) => {
        console.log(d[0])
        var id = d[0]['insertId']
        console.log(id)

        clienteDao.buscarCliente(id).then((cliente) => {
            response.send(cliente[0]);
        });
    })

}


function buscarCliente(request, response){
    var id = request.params.id
    clienteDao.buscarCliente(id).then((cliente) => {
        response.send(cliente[0]);
    });

}


function atualizarCliente(request, response){
    var id = request.params.id
    var dados = request.body
    clienteDao.updateCliente(id,dados).then((cliente) => {
        clienteDao.buscarCliente(id).then((cliente) => {
            response.send(cliente[0]);
        });
    });
}


function deletarCliente(request, response){
    var id = request.params.id
    clienteDao.deleteCliente(id).then((cliente) => {
        response.send({});
    });

}

module.exports={listarCliente, inserirCliente, buscarCliente, atualizarCliente, deletarCliente}