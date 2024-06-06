const express = require('express')
const utilisateurs_routes = require('./utilisateurs.routes')
const role_routes = require('./role_routes')
const administrationRouter = express.Router()

administrationRouter.use('/utilisateurs', utilisateurs_routes)
administrationRouter.use('/role', role_routes)

module.exports = administrationRouter