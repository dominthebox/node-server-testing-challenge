const express = require('express')
const server = express()
const gotRouter = require('./api/gotRouter')

server.use(express.json())
server.use('/chars', gotRouter)

module.exports = server