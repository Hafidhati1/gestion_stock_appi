const express = require('express')
const utilisateurs_routes = require('./utilisateurs.routes')
const categorie_router = require('../categorie/categories.route')
const produit_router = require('../produit/produit.route')
const client_router = require('../client/client.route')
//const categorie_router=require('././categories.route')
const role_routes = require('./role_routes')
const administrationRouter = express.Router()

administrationRouter.use('/utilisateurs', utilisateurs_routes)
administrationRouter.use('/role', role_routes)

administrationRouter.use('/categorie', categorie_router)
administrationRouter.use('/produit', produit_router)
administrationRouter.use('/client', client_router)


module.exports = administrationRouter