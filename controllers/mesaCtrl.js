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

	// // crear usuario
	// create: (req, res) => {
	// 	User.create(req.body, (err, user) => {
	// 		if(err) return res.json({success: false, code: err.code})
	// 		const token = signToken(user)
	// 		res.json({success: true, message: "Usuario creado. Token añadido!", token})
	// 	})
	// },

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