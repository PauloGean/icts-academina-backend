const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM matricula;');
    return rows;  
}

async function findbyId(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM curso where idmatricula = ?;',[id]);
    return rows;  
}


async function create(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO matricula(idcurso,idmatricula) VALUES (?,?)';
    const values = [dado.nome, dado.matricula];
    return await conexao.query(sql, values);

}

async function remove(id){
    const conexao = await connect();
    return await conexao.query('Delete FROM curso where idmatricula = ?;',[id]);;
      
}

async function update(id,dado){
    const conexao = await connect();
    const sql = 'UPDATE curso SET nome=?, descricao=? WHERE idmatricula =?';
    const values = [dado.nome, dado.matricula, id];
    return await conexao.query(sql, values);
}

module.exports={getAll,findbyId,remove,create,update}