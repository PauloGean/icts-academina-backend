const { connect } = require("../config/db");

async function getAll(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM employee;');
    return rows;  
}
async function findyById(id){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM employee where idemployee = ?;',[id]);
    return rows;  
}
async function create(dado){
    const conexao = await connect();
    const sql = 'INSERT INTO employee(nome,cpf) VALUES (?,?)';
    const values = [dado.nome, dado.cpf];
    return await conexao.query(sql, values);
}
async function update(id, dado){
    const conexao = await connect();
    const sql = 'UPDATE employee SET nome=?, cpf=? WHERE idemployee =?';
    const values = [dado.nome, dado.cpf, id];
    return await conexao.query(sql, values);
}
async function remove(id){
    const conexao = await connect();
    return await conexao.query('DELETE FROM employee where idemployee = ?;',[id]);
     
}

module.exports={getAll,findyById,create,update,remove}