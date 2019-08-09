const express = require('express')
const controller = require('../controller/clientsController')
const clientsRoutes = express.Router()

clientsRoutes.post('/create', controller.create)
clientsRoutes.get('/list', controller.list)
clientsRoutes.put('/put', controller.list)
clientsRoutes.get('/get/:id', controller.list)
clientsRoutes.delete('/delete', controller.remove)

module.exports = clientsRoutes
