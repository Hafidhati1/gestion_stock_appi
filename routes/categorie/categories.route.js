const express= require('express')
const categorie_controller = require('../../controllers/categorie/categorie.contoller')

const categorie_router= express.Router()

categorie_router.get("/", categorie_controller.getCategories)
categorie_router.get("/:ID_CATEGORIE", categorie_controller.findCategorie)
categorie_router.post("/",categorie_controller.createCategories)
// sequelize_router.post("/",sequelize_controller.createUtilisateurs)
categorie_router.put("/:ID_CATEGORIE",categorie_controller.updateCategories)
categorie_router.delete("/:ID_CATEGORIE",categorie_controller.deleteCategories)

module.exports=categorie_router