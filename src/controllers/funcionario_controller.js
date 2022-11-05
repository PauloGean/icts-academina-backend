
const funcionarioDao = require('../dao/funcionario_dao')

function getAll(request, response) {
    funcionarioDao.getAll().then((d) => {
        response.send(d);
    })
}

function create(request, response) {
    var dados = request.body
    console.log(dados)
    funcionarioDao.create(dados).then((d) => {
        console.log(d[0])
        var id = d[0]['insertId']
        console.log(id)

        funcionarioDao.findById(id).then((result) => {
            response.send(result[0]);
        });
    })
}

function findById(request, response) {
    var id = request.params.id
    funcionarioDao.findById(id).then((result) => {
        response.send(result[0]);
    });
}

function update(request, response) {
    var id = request.params.id
    var dados = request.body
    funcionarioDao.update(id, dados).then((result) => {
        funcionarioDao.findById(id).then((result) => {
            response.send(result[0]);
        });
    });
}


function remove(request, response) {
    var id = request.params.id
    funcionarioDao.remove(id).then((result) => {
        response.send({});
    });
}

module.exports={ getAll, create, findById, update, remove }