const employeeDao=require('../dao/employee_dao')

function getAll(request,response){
    employeeDao.getAll().then((d)=>{
        response.send(d);
    })
};

function findyById(request,response){
    var id = request.params.id
    employeeDao.findyById(id).then((employee)=>{
        response.send(employee[0]);
    })    
};

function create(request,response){
    var dados= request.body
    console.log(dados)
    employeeDao.create(dados).then((d)=>{
        console.log(d[0])
        var id = d[0]['insertId']
            console.log(id)

        employeeDao.findyById(id).then((employee)=>{
            response.send(employee[0]);
        });
    })  
};

function update(request,response){
    var id = request.params.id
    var dados = request.body
    employeeDao.update(id,dados).then((employee)=> {
        employeeDao.findyById(id).then((employee=> {
        response.send(employee[0]);
        })); 
    });
};

function remove(request,response){
    var id = request.params.id
    employeeDao.remove(id).then(()=>{
        response.send([]);
    });
};

module.exports={getAll,findyById,update,remove,create}