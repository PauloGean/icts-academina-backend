async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    // "mysql://<usuario>:<senha>@<ip>:<porta>/<schema>"
    const connection = await mysql.createConnection("mysql://root:password@127.0.0.1:3307/academia_db");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
};

module.exports={connect}