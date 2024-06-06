const express = require('express')
const role_controller = require('../../controllers/administration/role_controller')
const role_routes = express.Router()

role_routes.post("/", role_controller.createRoles)
role_routes.get("/", role_controller.getRoles)
role_routes.put("/:ID_ROLE", role_controller.updateRoles)
role_routes.delete("/:ID_ROLE", role_controller.deleteRoles)

module.exports = role_routes