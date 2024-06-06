const express= require('express')
const produit_controller = require('../../controllers/produit/produit.controller')

const produit_router= express.Router()

produit_router.get("/", produit_controller.getProduits)
produit_router.get("/:ID_PRODUIT", produit_controller.findProduit)
produit_router.post("/",produit_controller.createProduits)
// sequelize_router.post("/",sequelize_controller.createUtilisateurs)
produit_router.put("/:ID_PRODUIT",produit_controller.updateProduits)
produit_router.delete("/:ID_PRODUIT",produit_controller.deleteProduits)

module.exports=produit_router