const db = require('../config/db')

async function listarClientes(){
    const conexao = await db.connect();
    const [rows] = await conexao.query('SELECT * FROM cliente;');
    return rows;  
}

async function buscarCliente(id){
    const conexao = await db.connect();
    const [rows] = await conexao.query('SELECT * FROM cliente where idcliente = ?;',[id]);
    return rows;  
}

async function insertCliente(dado){
    const conexao = await db.connect();
    const sql = 'INSERT INTO cliente(nome,cpf) VALUES (?,?)';
    const values = [dado.nome, dado.cpf];
    return await conexao.query(sql, values);
}


module.exports={listarClientes,insertCliente,buscarCliente}