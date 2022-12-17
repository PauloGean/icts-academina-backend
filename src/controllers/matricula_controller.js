
const matriculaDao = require('../dao/matricula_dao')
const clienteDao = require('../dao/cliente_dao')


function getAll(request, response) {
    matriculaDao.getAll().then((listMatriculas) => {
    for (let i=0; i<listMatriculas.length; i++)  {

        const matricula=listMatriculas[i]

        matricula['cliente']={'idcliente':matricula.idcliente,'nome':matricula.nome_cliente,'cpf':matricula.cpf}
        matricula['curso']={'idcurso':matricula.idcurso,'nome':matricula.nome_curso,'descricao':matricula.descricao_curso}

        delete matricula['descricao_curso']
        delete matricula['nome_cliente']
        delete matricula['nome_curso']
        delete matricula['cpf']


    } 

        response.send(listMatriculas);
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
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
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    })
}

function findById(request, response) {
    var id = request.params.id
    matriculaDao.findById(id).then((dados) => {

        const matricula=dados[0]
        matricula['cliente']={'idcliente':matricula.idcliente,'nome':matricula.nome_cliente,'cpf':matricula.cpf}
        matricula['curso']={'idcurso':matricula.idcurso,'nome':matricula.nome_curso,'descricao':matricula.descricao_curso}

        delete matricula['descricao_curso']
        delete matricula['nome_cliente']
        delete matricula['nome_curso']
        delete matricula['cpf']
        response.send(matricula);
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}

function update(request, response) {
    var id = request.params.id
    var dados = request.body
    matriculaDao.update(id,dados).then((cliente) => {
        matriculaDao.findById(id).then((cliente) => {
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
    matriculaDao.remove(id).then((c) => {
        response.send({});
    }).catch((e) => {
        response.statusCode = 500;
        const msgErro = { "message": e }
        response.send(msgErro);
    });
}

module.exports={ getAll, create, findById, update, remove }
