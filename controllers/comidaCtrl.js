let Comida = require("../models/Comida");

module.exports = {
	// listar comida
	listar: (req, res) => {
		Comida.find({}, (err, comidas) => {
			res.json(comidas)
		})
	},

	// obtener comida por id 
	buscarPorId: (req, res) => {
		Comida.findById(req.params.id, (err, comida) => {
			res.json(comida)
		})
	},

	// crear comida
	create: (req, res) => {
		Comida.create(req.body, (err, data) => {
			res.json(data)
		})
	},

	// // actualizar usuario
	// update: (req, res) => {
	// 	User.findById(req.params.id, (err, user) => {
	// 		Object.assign(user, req.body)
	// 		user.save((err, updatedUser) => {
	// 			res.json({success: true, message: "Usuario actualizado.", user})
	// 		})
	// 	})
	// },

	// // eliminar usuario
	// destroy: (req, res) => {
	// 	User.findByIdAndRemove(req.params.id, (err, user) => {
	// 		res.json({success: true, message: "Usuario eliminado.", user})
	// 	})
	// },
};