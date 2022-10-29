const clienteDao=require('../dao/cliente_dao')

function getAll(request,response){
    clienteDao.listarClientes().then((d)=>{
        response.send(d);
    })    
}

function findyById(request,response){
    var id = request.params.id
    clienteDao.buscarCliente(id).then((cliente)=>{
        response.send(cliente[0]);
    })    
}

function update(request,response){
    var id = request.params.id
    var dados = request.body
    clienteDao.updateCliente(id,dados).then((cliente)=> {
        clienteDao.buscarCliente(id).then((cliente)=> {
        response.send(cliente[0]);
        }); 
    });
}

function remove(request,response){
    var id = request.params.id
    clienteDao.deleteCliente(id).then(()=>{
        response.send([]);
    });
};

function create(request,response){
    var dados= request.body
    console.log(dados)
    clienteDao.insertCliente(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        clienteDao.buscarCliente(id).then((cliente)=>{
            response.send(cliente[0]);
        });
    })  
};

module.exports={getAll,findyById,update,remove,create}