let mongoose = require('mongoose');
let schema = mongoose.Schema;

let mesaSchema = new schema(
    {
        numeroMesa: {
            type: Number,
        },
        disponible: {
            type: Boolean,
        },
    },
    {
        collection: "mesas"
    }
)

module.exports = mongoose.model("mesa", mesaSchema);