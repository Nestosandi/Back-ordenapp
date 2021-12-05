let mongoose = require('mongoose');
let schema = mongoose.Schema;

let comidaSchema = new schema(
    {
        titulo: {
            type: String,
        },
        descripcion: {
            type: String,
        },
        inventario: {
            type: Number,
       }
    },
    {
        collection: "comidas"
    }
)

module.exports = mongoose.model("comida", comidaSchema);