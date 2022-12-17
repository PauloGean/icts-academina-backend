
const cursoDao = require('../dao/curso_dao')

function getAll(request, response) {

    cursoDao.getAll().then((d) => {
        response.send(d);
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    })


}

function create(request, response) {
    var dados = request.body
    try {
        cursoDao.create(dados).then((d) => {
            console.log(d[0])
            var id = d[0]['insertId']
            console.log(id)

            cursoDao.findById(id).then((c) => {
                response.send(c[0]);
            });
        }).catch((e) => {
            response.statusCode = 500;
            const msgErro = { "message": e }
            response.send(msgErro);
        })
    }catch(erro){
        response.statusCode = 500;
        const msgErro = { "message": erro }
        response.send(msgErro);
    }

}

function findById(request, response) {
    var id = request.params.id
    cursoDao.findById(id).then((cliente) => {
        response.send(cliente[0]);
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}

function validate(dados) {
    if (dados.nome == 'exemplo') {
        throw "Nome inválido" 
    }

    if (!dados.nome) {
        throw  "Nome não pode ser vazio" 
    }

    if (!dados.descricao) {
        throw  "Descricao não pode ser vazia" 
    }
}

function update(request, response) {
    var id = request.params.id
    var dados = request.body
    try {
        validate(dados)
        cursoDao.update(id, dados).then((cliente) => {
            cursoDao.findById(id).then((cliente) => {
                response.send(cliente[0]);
            });
        }).catch((e) => {
            response.statusCode = 500;
            const msgErro = { "message": e }
            response.send(msgErro);
        });

    } catch (erro) {
        response.statusCode = 500;
        const msgErro = { "message": erro }
        response.send(msgErro);
    }

}


function remove(request, response) {
    var id = request.params.id
    cursoDao.remove(id).then((c) => {
        response.send({});
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}

module.exports = { getAll, create, findById, update, remove }
