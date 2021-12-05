let express = require("express");
let comidaRoute = express.Router();
let comidaCtrl = require("../controllers/comidaCtrl");

comidaRoute.route("/").get(comidaCtrl.listar);

comidaRoute.route("/buscarPorComidaId/:id").get(comidaCtrl.buscarPorId);

module.exports = comidaRoute;
