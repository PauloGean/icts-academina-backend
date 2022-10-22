const { connect } = require("../config/db");

async function listarCurso(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM curso;');
    return rows;  
}

async function buscarCurso(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM curso where idcurso = ?;',[id]);
    return rows;  
}

async function insertCurso(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO curso(nome,descricao) VALUES (?,?)';
    const values = [dado.nome, dado.descricao];
    return await conexao.query(sql, values);
}



async function updateCurso(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE curso SET nome=?, descricao=? WHERE idcurso =?';
    const values = [dado.nome, dado.descricao, id];
    return await conexao.query(sql, values);
}

async function deleteCurso(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM curso where idcurso = ?;',[id]);;  
}



module.exports={listarCurso,buscarCurso,insertCurso,updateCurso,deleteCurso}