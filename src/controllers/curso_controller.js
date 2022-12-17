const cursoDao=require('../dao/curso_dao')

function getAll(request,response){
    cursoDao.getAll().then((d)=>{
        response.send(d);
    })    
};

function findyById(request,response){
    var id = request.params.id
    cursoDao.findyById(id).then((curso)=>{
        response.send(curso[0]);
    })    
};

function create(request,response){
    var dados= request.body
    console.log(dados)
    cursoDao.create(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        cursoDao.findyById(id).then((curso)=>{
            response.send(curso[0]);
        });
    })  
};

function update(request,response){
    var id = request.params.id
    var dados = request.body
    cursoDao.update(id,dados).then((curso)=> {
        cursoDao.findyById(id).then((curso=> {
        response.send(curso[0]);
        })); 
    });
};

function remove(request,response){
    var id = request.params.id
    cursoDao.remove(id).then(()=>{
        response.send([]);
    });
};

module.exports={getAll,findyById,update,remove,create}