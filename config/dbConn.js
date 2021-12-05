//Conexion a la base de datos mongo
const mongoose = require("mongoose");
const {URI_DB} = require("./config");

mongoose
.connect(URI_DB)
.then(() => console.log("Conexion establecida con la base de datos"))
.catch(err => console.error(err));