require('dotenv/config')
const express = require('express')
const cors = require('cors')
const helmet = require("helmet")

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(helmet())
app.use(express.json())
app.use(require('./routes'))

app.listen(3333)
console.log('run')