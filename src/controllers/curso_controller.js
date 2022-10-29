
const cursoDao = require('../dao/curso_dao')

function listarCursos(request, response) {
    cursoDao.getAll().then((d) => {
        response.send(d);
    })
}

function inserirCurso(request, response) {
    var dados = request.body
    console.log(dados)
    cursoDao.create(dados).then((d) => {
        console.log(d[0])
        var id = d[0]['insertId']
        console.log(id)

        cursoDao.findById(id).then((c) => {
            response.send(c[0]);
        });
    })
}

function buscarCurso(request, response) {
    var id = request.params.id
    cursoDao.findById(id).then((cliente) => {
        response.send(cliente[0]);
    });
}

function atualizarCurso(request, response) {
    var id = request.params.id
    var dados = request.body
    cursoDao.update(id,dados).then((cliente) => {
        cursoDao.findById(id).then((cliente) => {
            response.send(cliente[0]);
        });
    });
}


function deletarCurso(request, response) {
    var id = request.params.id
    cursoDao.remove(id).then((c) => {
        response.send({});
    });
}

module.exports={listarCursos,inserirCurso,buscarCurso,atualizarCurso,deletarCurso }
