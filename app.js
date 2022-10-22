const express = require("express")
const cors = require("cors");

const AppRoutes = require('./src/config/routes');

const port=3005
const server= express();

server.use(express.json())
server.use(cors())

server.use(AppRoutes)

server.listen(port, function () {
    console.log("Rodando na porta" + port)

})
