const express = require('express')
const appRoutes = express.Router();
const homeController = require('../controllers/home_controller')
const clienteControler =  require('../controllers/cliente_controller')
const funcionarioControler =  require('../controllers/funcionario_controller')

const cursoControler =  require('../controllers/curso_controller')

appRoutes.get('/', homeController.getIndex)
appRoutes.get('/sobre', homeController.getSobre)
// CLIENTE
appRoutes.get('/cliente', clienteControler.getAll)
appRoutes.post('/cliente', clienteControler.create)
appRoutes.put('/cliente/:id', clienteControler.update)
appRoutes.delete('/cliente/:id', clienteControler.remove)
appRoutes.get('/cliente/:id', clienteControler.findById)

// CURSO
appRoutes.get('/curso', cursoControler.getAll)
appRoutes.post('/curso', cursoControler.create)
appRoutes.put('/curso/:id', cursoControler.update)
appRoutes.delete('/curso/:id', cursoControler.remove)
appRoutes.get('/curso/:id', cursoControler.findById)


// FUNCIONARIO
appRoutes.get('/funcionario', funcionarioControler.getAll)
appRoutes.post('/funcionario', funcionarioControler.create)
appRoutes.put('/funcionario/:id', funcionarioControler.update)
appRoutes.delete('/funcionario/:id', funcionarioControler.remove)
appRoutes.get('/funcionario/:id', funcionarioControler.findById)


module.exports = appRoutes
