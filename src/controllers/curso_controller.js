
const cursoDao = require('../dao/curso_dao')

function getAll(request, response) {
    cursoDao.getAll().then((d) => {
        response.send(d);
    })
}

function create(request, response) {
    var dados = request.body
    if (validade(response, dados)) {
        cursoDao.create(dados).then((d) => {
            console.log(d[0])
            var id = d[0]['insertId']
            console.log(id)

            cursoDao.findById(id).then((c) => {
                response.send(c[0]);
            });
        })
    }

}

function findById(request, response) {
    var id = request.params.id
    cursoDao.findById(id).then((cliente) => {
        response.send(cliente[0]);
    });
}

function validade(response, dados) {
    if (dados.nome == 'exemplo') {
        response.statusCode = 500;
        const msgErro = { "message": "Nome inválido" }
        response.send(msgErro);
        return false
    }

    return true
}

function update(request, response) {
    var id = request.params.id
    var dados = request.body

    if (validade(response, dados)) {

        cursoDao.update(id, dados).then((cliente) => {
            cursoDao.findById(id).then((cliente) => {
                response.send(cliente[0]);
            });
        });
    }
}


function remove(request, response) {
    var id = request.params.id
    cursoDao.remove(id).then((c) => {
        response.send({});
    });
}

module.exports = { getAll, create, findById, update, remove }
