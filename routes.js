const api = require('express').Router()
const clientsRouter = require('./routes/clients')
const loginRoute = require('./routes/login')

api.use('/clients', clientsRouter)
api.use('/login', loginRoute)

module.exports = api
