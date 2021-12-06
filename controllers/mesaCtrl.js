let Mesa = require("../models/Mesa");

module.exports = {
	// listar mesa
	listar: (req, res) => {
		Mesa.find({}, (err, mesas) => {
			res.json(mesas)
		})
	},

	// obtener mesa por id 
	buscarPorId: (req, res) => {
		Mesa.findById(req.params.id, (err, mesa) => {
			res.json(mesa)
		})
	},

	// crear mesa
	create: (req, res) => {
		Mesa.create(req.body, (err, data) => {
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