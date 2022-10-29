const cursoDao=require('../dao/curso_dao')

function getAll(request,response){
    cursoDao.listarCurso().then((d)=>{
        response.send(d);
    })    
};

function findyById(request,response){
    var id = request.params.id
    cursoDao.buscarCurso(id).then((curso)=>{
        response.send(curso[0]);
    })    
};

function create(request,response){
    var dados= request.body
    console.log(dados)
    cursoDao.insertCurso(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        cursoDao.buscarCurso(id).then((curso)=>{
            response.send(curso[0]);
        });
    })  
};

function update(request,response){
    var id = request.params.id
    var dados = request.body
    cursoDao.updateCurso(id,dados).then((curso)=> {
        cursoDao.buscarCurso(id).then((curso=> {
        response.send(curso[0]);
        })); 
    });
};

function remove(request,response){
    var id = request.params.id
    cursoDao.deleteCurso(id).then(()=>{
        response.send([]);
    });
};

module.exports={getAll,findyById,update,remove,create}