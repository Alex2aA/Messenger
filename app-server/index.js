const express = require('express')
const config = require('./config')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.unsubscribe(bodyParser.json())

app.listen(config.port, () => console.log('server is listening on http://localhost:' + config.port))