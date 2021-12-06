const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {NODE_ENV, PORT} = require("./config/config");
const dbConn = require("./config/dbConn");
const mesaRoute = require("./routes/mesaRuta");
const comidaRoute = require("./routes/comidaRuta");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/mesas", mesaRoute);
app.use("/comidas", comidaRoute);

//para el deploy
if(NODE_ENV === "production") {
    app.use(express.static(`${___dirname}/site/`));
    app.use("*", (req, res) => {
        res.sendFile(`${___dirname}/site/index.html`)
    });
};

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})