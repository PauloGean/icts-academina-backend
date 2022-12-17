const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM curso;');
    return rows;  
}

async function findbyId(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM curso where idcurso = ?;',[id]);
    return rows;  
}


async function create(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO curso(nome,descricao) VALUES (?,?)';
    const values = [dado.nome, dado.descricao];
    return await conexao.query(sql, values);

}

async function remove(id){
    const conexao = await connect();
    return await conexao.query('Delete FROM curso where idcurso = ?;',[id]);;
      
}

async function update(id,dado){
    const conexao = await connect();
    const sql = 'UPDATE curso SET nome=?, descricao=? WHERE idcurso =?';
    const values = [dado.nome, dado.descricao, id];
    return await conexao.query(sql, values);
}

module.exports={getAll,findbyId,remove,create,update}