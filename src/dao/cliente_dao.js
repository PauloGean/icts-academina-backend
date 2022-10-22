// DAO= data, axios, object - conexão com o banco //

const { connect } = require("../config/db");

async function listarClientes(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM cliente;');
    return rows;  
}

async function buscarCliente(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM cliente where idcliente = ?;',[id]);
    return rows;  
}


async function deleteCliente(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM cliente where idcliente = ?;',[id]);;  
}

async function insertCliente(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO cliente(nome,cpf) VALUES (?,?)';
    const values = [dado.nome, dado.cpf];
    return await conexao.query(sql, values);
}

async function updateCliente(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE cliente SET nome=?, cpf=? WHERE idcliente =?';
    const values = [dado.nome, dado.cpf, id];
    return await conexao.query(sql, values);
}

module.exports={listarClientes,insertCliente,buscarCliente,deleteCliente, updateCliente}