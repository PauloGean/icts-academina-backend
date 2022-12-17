const express = require("express")
const appRoutes = express.Router();
const homeControlller = require('../controllers/home_controller')
const clienteControlller = require('../controllers/cliente_controller')
const cursoControlller = require('../controllers/curso_controller')
const employeeControlller = require('../controllers/employee_controller')
const matriculaControlller = require('../controllers/matricula_controller')

appRoutes.get('/', homeControlller.getIndex)

appRoutes.get('/sobre', homeControlller.getSobre)

//CLIENTE
appRoutes.get('/cliente', clienteControlller.getAll)
appRoutes.post('/cliente', clienteControlller.create)
appRoutes.put('/cliente', clienteControlller.update)
appRoutes.delete('/cliente/:id', clienteControlller.remove)
appRoutes.get('/cliente/:id', clienteControlller.findyById)

//CURSO
appRoutes.get('/curso', cursoControlller.getAll)
appRoutes.post('/curso', cursoControlller.create)
appRoutes.put('/curso/:id', cursoControlller.update)
appRoutes.delete('/curso/:id', cursoControlller.remove)
appRoutes.get('/curso/:id', cursoControlller.findyById)

//EMPLOYEE
appRoutes.get('/employee', employeeControlller.getAll)
appRoutes.post('/employee', employeeControlller.create)
appRoutes.put('/employee/:id', employeeControlller.update)
appRoutes.delete('/employee/:id', employeeControlller.remove)
appRoutes.get('/employee/:id', employeeControlller.findyById)

//MATRICULA
appRoutes.get('/matricula', matriculaControlller.getAll)
appRoutes.post('/matricula', matriculaControlller.create)
appRoutes.put('/matricula/:id', matriculaControlller.update)
appRoutes.delete('/matricula/:id', matriculaControlller.remove)
appRoutes.get('/matricula/:id', matriculaControlller.findyById)

module.exports = appRoutes