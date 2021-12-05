let express = require('express');
let	usersRouter = express.Router();
let	usersCtrl = require('../controllers/userCtrl');
let	verifyToken = require('../config/auth').verifyToken;

usersRouter.route('/')
	.get(usersCtrl.listar)
	.post(usersCtrl.crearUsuario)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)
usersRouter.route('/:id')
	.get(usersCtrl.buscarPorId)

module.exports = usersRouter;