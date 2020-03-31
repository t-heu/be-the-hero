require('dotenv/config')
const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const helmet = require("helmet")

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(helmet())
app.use(express.json())
app.use(require('./routes'))
app.use(errors())

module.exports = app
