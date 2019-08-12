const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dbConnection = require('./dbConnection')
const logger = require('morgan')
require('dotenv').config()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/', require('./routes'))
app.use('/', (req, res) => res.json({ status: 'ok' }))

;(async () => {
  await dbConnection.connectDB()
  app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
  })
})()
