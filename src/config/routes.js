const express = require("express")
const appRoutes = express.Router();
const homeControlller = require('../controllers/home_controller')
const clienteControlller = require('../controllers/cliente_controller')
const cursoControlller = require('../controllers/curso_controller')

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


module.exports = appRoutes