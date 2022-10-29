const express = require('express')
const appRoutes = express.Router();
const homeController = require('../controllers/home_controller')
const clienteControler =  require('../controllers/cliente_controller')
const cursoControler =  require('../controllers/curso_controller')

appRoutes.get('/', homeController.getIndex)
appRoutes.get('/sobre', homeController.getSobre)
// CLIENTE
appRoutes.get('/cliente', clienteControler.listarClientes)
appRoutes.post('/cliente', clienteControler.inserirCliente)
appRoutes.put('/cliente/:id', clienteControler.atualizarCliente)
appRoutes.delete('/cliente/:id', clienteControler.deletarCliente)
appRoutes.get('/cliente/:id', clienteControler.buscarCliente)

// CURSO
appRoutes.get('/curso', cursoControler.listarCursos)
appRoutes.post('/curso', cursoControler.inserirCurso)
appRoutes.put('/curso/:id', cursoControler.atualizarCurso)
appRoutes.delete('/curso/:id', cursoControler.deletarCurso)
appRoutes.get('/curso/:id', cursoControler.buscarCurso)

module.exports = appRoutes
