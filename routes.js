const api = require('express').Router()
const clientsRouter = require('./routes/clients')
const loginRoute = require('./routes/login')
const verifyJWT = require('./utils/verifyJWT')

api.use('/clients', verifyJWT, clientsRouter)
api.use('/login', loginRoute)

module.exports = api
