const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM matricula;');
    return rows;  
}

async function findById(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM matricula where idmatricula = ?;',[id]);
    return rows;  
}

async function create(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO matricula(idcurso,idcliente) VALUES (?,?)';
    const values = [dado.idcurso, dado.idcliente];
    return await conexao.query(sql, values);
}



async function update(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE curso SET idcurso=?, idcliente=? WHERE idmatricula =?';
    const values = [dado.idcurso, dado.idcliente, id];
    return await conexao.query(sql, values);
}

async function remove(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM matricula where idmatricula = ?;',[id]);;  
}



module.exports={getAll, create, findById, remove,  update}