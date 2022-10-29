const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM curso;');
    return rows;  
}

async function findById(id){
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



async function update(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE curso SET nome=?, descricao=? WHERE idcurso =?';
    const values = [dado.nome, dado.descricao, id];
    return await conexao.query(sql, values);
}

async function remove(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM curso where idcurso = ?;',[id]);;  
}



module.exports={getAll, create, findById, remove,  update}