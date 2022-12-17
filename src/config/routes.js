const { application } = require("express");
const express = require("express")
const AppRoutes = express.Router();
const homeController = require('../controllers/home_controller')
const clienteController = require('../controllers/cliente_controller')
const cursoController = require('../controllers/curso_controller')
const funcionarioController = require('../controllers/funcionario_controller')
const matriculaController = require('../controllers/matricula_controller')



AppRoutes.get('/', homeController.getIndex)
AppRoutes.get('/sobre', homeController.getSobre)

//Cliente

AppRoutes.get('/cliente', clienteController.getAll)
AppRoutes.post('/cliente', clienteController.create)
AppRoutes.put('/cliente/:id', clienteController.update)
AppRoutes.delete('/cliente/:id',clienteController.remove)
AppRoutes.get('/cliente/:id', clienteController.findbyId)

//Curso

AppRoutes.get('/curso', cursoController.getAll)
AppRoutes.post('/curso', cursoController.create)
AppRoutes.put('/curso/id:', cursoController.update)
AppRoutes.delete('/curso/:id',cursoController.remove)
AppRoutes.get('/curso/:id', cursoController.findbyId)

//Funcionario

AppRoutes.get('/funcionario', funcionarioController.getAll)
AppRoutes.post('/funcionario', funcionarioController.create)
AppRoutes.put('/funcionario/:id', funcionarioController.update)
AppRoutes.delete('/funcionario:id',funcionarioController.remove)
AppRoutes.get('/funcionario/:id', funcionarioController.findbyId)

//Matricula

AppRoutes.get('/matricula', matriculaController.getAll)
AppRoutes.post('/matricula', matriculaController.create)
AppRoutes.put('/matricula/:id', matriculaController.update)
AppRoutes.delete('/matricula:id',matriculaController.remove)
AppRoutes.get('/matricula/:id', matriculaController.findbyId)


module.exports = AppRoutes