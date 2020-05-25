const express = require('express')
const dotenv = require('dotenv')
const temperature = require('./temperature/temperature.controller')
const {start } = require('./arduino/register')

dotenv.config()
const app = express()
const port = process.env.PORT || 8080

app.use('/temperature', temperature)
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
  start()
})
