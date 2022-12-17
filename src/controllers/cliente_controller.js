const clienteDao=require('../dao/cliente_dao')

function getAll(request,response){
    clienteDao.getAll().then((d)=>{
        response.send(d);
    })    
}

function findyById(request,response){
    var id = request.params.id
    clienteDao.findyById(id).then((cliente)=>{
        response.send(cliente[0]);
    })    
}

function update(request,response){
    var id = request.params.id
    var dados = request.body
    clienteDao.update(id,dados).then((cliente)=> {
        clienteDao.findyById(id).then((cliente)=> {
        response.send(cliente[0]);
        }); 
    });
}

function remove(request,response){
    var id = request.params.id
    clienteDao.remove(id).then(()=>{
        response.send([]);
    });
};

function create(request,response){
    var dados= request.body
    console.log(dados)
    clienteDao.create(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        clienteDao.findyById(id).then((cliente)=>{
            response.send(cliente[0]);
        });
    })  
};

module.exports={getAll,findyById,update,remove,create}