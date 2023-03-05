const express = require("express")
const app = express()
const PORT = 3000;
var nowe = 0;
var powypadkowe = 0;
var uzywane = 0;

//
const bodyParser = require("body-parser")
const path = require("path")


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname , "static/formularz3.html"))

})
app.post("/handleForm", function (req, res) {
    console.log(req.body)
    nowe = 0;
    uzywane = 0;
    powypadkowe = 0;

    for (const car in req.body){
        if (req.body[car] == 'uzywanych'){
            uzywane += 1;
        }
        else if (req.body[car] == 'nowe'){
            nowe += 1;
        }
        else if (req.body[car] == 'powypadkowych'){
            powypadkowe += 1;
        }
    }
    res.send(
        "Nowe: " + String(nowe) +
        "<br>Używane: " + String(uzywane) +
        "<br>Powypadkowe: " + String(powypadkowe))
})