const cursoDao=require('../dao/curso_dao')

function listarCurso(request,response){
    cursoDao.listarCurso().then((d)=>{
        response.send(d);
    })    
};

function buscarCurso(request,response){
    var id = request.params.id
    cursoDao.buscarCurso(id).then((curso)=>{
        response.send(curso[0]);
    })    
};

function inserirCurso(request,response){
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

function atualizarCurso(request,response){
    var id = request.params.id
    var dados = request.body
    cursoDao.updateCurso(id,dados).then((curso)=> {
        cursoDao.buscarCurso(id).then((curso=> {
        response.send(curso[0]);
        })); 
    });
};

function deletarCurso(request,response){
    var id = request.params.id
    cursoDao.deleteCurso(id).then(()=>{
        response.send([]);
    });
};

module.exports={listarCurso,buscarCurso,atualizarCurso,deletarCurso,inserirCurso}