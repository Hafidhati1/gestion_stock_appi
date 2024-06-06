const express= require('express')
const client_controller = require('../../controllers/client/Clients.Controller')

const client_router= express.Router()

client_router.get("/", client_controller.getClients)
client_router.get("/:ID_CLIENT", client_controller.findClient)
client_router.post("/",client_controller.createClients)
// sequelize_router.post("/",sequelize_controller.createUtilisateurs)
client_router.put("/:ID_CLIENT",client_controller.updateClients)
client_router.delete("/:ID_CLIENT",client_controller.deleteClients)

module.exports=client_router