const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM cliente;');
    return rows;  
}

async function findyById(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM cliente where idcliente = ?;',[id]);
    return rows;  
}

async function create(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO cliente(nome,cpf) VALUES (?,?)';
    const values = [dado.nome, dado.cpf];
    return await conexao.query(sql, values);
}

async function update(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE cliente SET nome=?, cpf=? WHERE idcliente =?';
    const values = [dado.nome, dado.cpf, id];
    return await conexao.query(sql, values);
}

async function remove(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM cliente where idcliente = ?;',[id]);
     
}

module.exports={getAll,findyById,create,update,remove}
