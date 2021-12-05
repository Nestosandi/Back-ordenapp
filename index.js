const express = require("express");
const cors = require("cors");
const {NODE_ENV, PORT} = require("./config/config");
const dbConn = require("./config/dbConn");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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