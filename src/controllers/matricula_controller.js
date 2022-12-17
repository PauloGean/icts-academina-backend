const matriculaDao = require('../dao/matricula_dao')

function getAll(request, response) {
    matriculaDao.getAll().then((d)=>{
        response.send(d);
    })  
}

function create(request, response){
    var dados= request.body
    console.log(dados)
    matriculaDao.create(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        matriculaDao.findbyId(id).then((curso)=>{
            response.send(curso[0]);
        });
    }) 
}

function findbyId (request, response) {
    var id = request.params.id
    matriculaDao.findbyId(id).then((curso)=>{
        response.send(curso[0]);
    })  

}

function update (request, response) {
    var id = request.params.id
    var dados = request.body
    matriculaDao.update(id,dados).then((curso)=>{
        matriculaDao.findbyId(id).then((curso)=>{
            response.send(curso[0]);
        });

    });  
}

function remove(request, response) {
    var id = request.params.id
    matriculaDao.remove(id).then(()=> {
        response.send({});
    });   
}


    module.exports={getAll,create,findbyId,remove,update,}
