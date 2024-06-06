const express = require('express')
const client_controller = require('../../controllers/administration/client_controller')
const client_routes = express.Router()

client_routes.post("/", client_controller.createClients)
client_routes.get("/", client_controller.getClients)
client_routes.put("/:ID_CLIENT", client_controller.updateClients)
client_routes.delete("/:ID_CLIENT", client_controller.deleteClients)

module.exports = client_routes