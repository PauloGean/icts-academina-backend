async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    // "mysql://<usuario>:<senha>@<ip>:<porta>/<schema>"
    const connection = await mysql.createConnection("mysql://root:admin@localhost:3306/academia_db");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function listarClientes(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM cliente;');
    return rows;  
}


// function listarClientes(){
//     var clientes=[ 
//         {   nome:"Thiago",
//             cpf: "123132132"
//         }, 
//         {   nome:"Marciete",
//             cpf: "123132132"
//         },
//         {   nome:"Leticia",
//             cpf: "123132132"
//         },
//         {  nome:"Carine",
//             cpf: "123132132"
//         }
//     ]
//     return clientes;
// }

module.exports={listarClientes}