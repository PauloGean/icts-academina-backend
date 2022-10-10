const express = require('express')
const appRoutes = express.Router();
const homeController = require('../controllers/home_controller')
const clienteController = require('../controllers/cliente_controller')

appRoutes.get('/', homeController.index)
appRoutes.get('/sobre', homeController.sobre)

appRoutes.get('/cliente', clienteController.getClientes)
appRoutes.post('/cliente', clienteController.createCliente)

module.exports = appRoutes