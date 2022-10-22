const { application } = require("express");
const express = require("express")
const AppRoutes = express.Router();
const homeController = require('../controllers/home_controller')
const clienteController = require('../controllers/cliente_controller')
const cursoController = require('../controllers/curso_controller')


AppRoutes.get('/', homeController.getIndex)
AppRoutes.get('/sobre', homeController.getSobre)

//Cliente

AppRoutes.get('/cliente', clienteController.listarClientes)
AppRoutes.post('/cliente', clienteController.insertCliente)
AppRoutes.put('/cliente', clienteController.atualizarCliente)
AppRoutes.delete('/cliente',clienteController.deletarCliente)
AppRoutes.get('/cliente/:id', clienteController.buscarCliente)

//Curso

AppRoutes.get('/curso', cursoController.listarCurso)
AppRoutes.post('/curso', cursoController.insertCurso)
AppRoutes.put('/curso', cursoController.atualizarCurso)
AppRoutes.delete('/curso',cursoController.deletarCurso)
AppRoutes.get('/curso/:id', cursoController.buscarCurso)


module.exports = AppRoutes