const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dbConnection = require('./dbConnection')

app.use(cors())
app.use(bodyParser.json())

app.use('/', require('./routes'))
app.use('/', (req, res) => res.json({ status: 'ok' }))

;(async () => {
  await dbConnection.connectDB()
  app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
  })
})()
