const express = require("express")
const appRoutes = express.Router();
const homeControlller = require('../controllers/home_controller')
const clienteControlller = require('../controllers/cliente_controller')
const cursoControlller = require('../controllers/curso_controller')

appRoutes.get('/', homeControlller.getIndex)

appRoutes.get('/sobre', homeControlller.getSobre)

//CLIENTE
appRoutes.get('/cliente', clienteControlller.listarClientes)
appRoutes.post('/cliente', clienteControlller.inserirCliente)
appRoutes.put('/cliente', clienteControlller.atualizarCliente)
appRoutes.delete('/cliente', clienteControlller.deletarCliente)
appRoutes.get('/cliente/:id', clienteControlller.buscarCliente)

//CURSO
appRoutes.get('/curso', cursoControlller.listarCurso)
appRoutes.post('/curso', cursoControlller.inserirCurso)
appRoutes.put('/curso', cursoControlller.atualizarCurso)
appRoutes.delete('/curso', cursoControlller.deletarCurso)
appRoutes.get('/curso/:id', cursoControlller.buscarCurso)


module.exports = appRoutes