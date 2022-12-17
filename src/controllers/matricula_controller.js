
const matriculaDao = require('../dao/matricula_dao')

function getAll(request, response) {
    matriculaDao.getAll().then((d) => {
        response.send(d);
    })
}

function create(request, response) {
    var dados = request.body
    console.log(dados)
    matriculaDao.create(dados).then((d) => {
        console.log(d[0])
        var id = d[0]['insertId']
        console.log(id)

        matriculaDao.findById(id).then((c) => {
            response.send(c[0]);
        });
    })
}

function findById(request, response) {
    var id = request.params.id
    matriculaDao.findById(id).then((cliente) => {
        response.send(cliente[0]);
    });
}

function update(request, response) {
    var id = request.params.id
    var dados = request.body
    matriculaDao.update(id,dados).then((cliente) => {
        matriculaDao.findById(id).then((cliente) => {
            response.send(cliente[0]);
        });
    });
}


function remove(request, response) {
    var id = request.params.id
    matriculaDao.remove(id).then((c) => {
        response.send({});
    });
}

module.exports={ getAll, create, findById, update, remove }
