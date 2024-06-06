const express = require('express')
const utilisateurs_routes = require('./utilisateurs.routes')
const categorie_router = require('../categorie/categories.route')
const produit_router = require('../produit/produit.route')
//const categorie_router=require('././categories.route')
const administrationRouter = express.Router()

administrationRouter.use('/utilisateurs', utilisateurs_routes)

administrationRouter.use('/categorie', categorie_router)
administrationRouter.use('/produit', produit_router)

module.exports = administrationRouter