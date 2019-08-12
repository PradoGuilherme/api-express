const express = require('express')
const controller = require('../controller/clientsController')
const clientsRoutes = express.Router()

clientsRoutes.post('/create', controller.create)
clientsRoutes.get('/list', controller.list)
clientsRoutes.put('/edit', controller.edit)
clientsRoutes.post('/remove', controller.remove)

module.exports = clientsRoutes
