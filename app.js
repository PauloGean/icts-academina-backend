const express = require('express')
const cors = require('cors')
const appRoutes = require('./src/config/routes')

const port=3005
const server= express()

server.use(express.json())
server.use(cors())
server.use(appRoutes)

server.listen(port, function (){
    console.log("rodando na porta" + port)

})