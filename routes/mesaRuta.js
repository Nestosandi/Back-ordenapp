let express = require('express');
let mesaRoute = express.Router();
let mesaCtrl = require('../controllers/mesaCtrl');

mesaRoute.route('/').get(mesaCtrl.listar);

mesaRoute.route('/buscarPorMesaId/:id').get(mesaCtrl.buscarPorId);

module.exports = mesaRoute;