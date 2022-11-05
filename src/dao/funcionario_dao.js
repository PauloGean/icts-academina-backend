const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM funcionario;');
    return rows;  
}

async function findById(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM funcionario where idfuncionario = ?;',[id]);
    return rows;  
}


async function remove(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM funcionario where idfuncionario = ?;',[id]);;  
}

async function create(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO funcionario(nome,cpf) VALUES (?,?)';
    const values = [dado.nome, dado.cpf];
    return await conexao.query(sql, values);
}

async function update(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE funcionario SET nome=?, cpf=? WHERE idfuncionario =?';
    const values = [dado.nome, dado.cpf, id];
    return await conexao.query(sql, values);
}

module.exports={getAll, create, findById, remove,  update}