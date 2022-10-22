const express = require('express');
const appRoutes = express.Router();
const homeController = require('../controllers/home_controller');
const clienteController = require('../controllers/cliente_controller')
const cursoController = require('../controllers/curso_controller')
appRoutes.get('/', homeController.getIndex)
appRoutes.get('/sobre', homeController.getSobre)

//CLIENTE

appRoutes.get('/cliente', clienteController.listarCliente)
appRoutes.get('/cliente/:id', clienteController.buscarCliente)
appRoutes.post('/cliente', clienteController.inserirCliente)
appRoutes.put('/cliente', clienteController.atualizarCliente)
appRoutes.delete('/cliente', clienteController.deletarCliente)

//CURSO

appRoutes.get('/curso', cursoController.listarCurso)
appRoutes.get('/curso/:id', cursoController.buscarCurso)
appRoutes.post('/curso', cursoController.inserirCurso)
appRoutes.put('/curso', cursoController.atualizarCurso)
appRoutes.delete('/curso', cursoController.deletarCurso)




module.exports = appRoutes