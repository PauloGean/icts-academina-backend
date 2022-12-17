
const clienteDao = require('../dao/cliente_dao')

function getAll(request, response) {
    clienteDao.getAll().then((d) => {
        response.send(d);
    })
}

function create(request, response) {
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

function findById(request, response) {
    var id = request.params.id
    clienteDao.findById(id).then((cliente) => {
        response.send(cliente[0]);
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}

function update(request, response) {
    var id = request.params.id
    var dados = request.body
    clienteDao.update(id, dados).then((cliente) => {
        clienteDao.findById(id).then((cliente) => {
            response.send(cliente[0]);
        });
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}


function remove(request, response) {
    var id = request.params.id
    clienteDao.remove(id).then((cliente) => {
        response.send({});
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}

module.exports={ getAll, create, findById, update, remove }
