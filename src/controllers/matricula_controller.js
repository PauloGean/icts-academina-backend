const matriculaDao=require('../dao/matricula.dao')

function getAll(request,response){
    matriculaDao.getAll().then((d)=>{
        response.send(d);
    })    
};

function findyById(request,response){
    var id = request.params.id
    matriculaDao.findyById(id).then((matricula)=>{
        response.send(matricula[0]);
    })    
};

function create(request,response){
    var dados= request.body
    console.log(dados)
    matriculaDao.create(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        matriculaDao.findyById(id).then((matricula)=>{
            response.send(matricula[0]);
        });
    })  
};

function update(request,response){
    var id = request.params.id
    var dados = request.body
    matriculaDao.update(id,dados).then((matricula)=> {
        matriculaDao.findyById(id).then((matricula=> {
        response.send(matricula[0]);
        })); 
    });
};

function remove(request,response){
    var id = request.params.id
    matriculaDao.remove(id).then(()=>{
        response.send([]);
    });
};

module.exports={getAll,findyById,update,remove,create}