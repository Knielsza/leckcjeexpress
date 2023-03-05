const { count } = require("console");
const express = require("express")
const app = express()
const PORT = 3000;


//


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

const path = require("path")
var napis = "";

function toRadTrue(val) {
    console.log("funkcja toRadTrue")
    let stopnie = val
    val = val * 0.0174532925
    val = val * 100
    val = Math.round(val)
    val = val / 100
    napis += stopnie + " stopni to " + val + " radianów"
}

function toRadFalse(val) {
    console.log("funkcja toRadFalse")
    let radiany = val
    val = val * 57.31
    val = val * 100
    val = Math.round(val)
    val = val / 100
    napis += radiany + " radianów to " + val + " stopni"
}

app.get('/', function (req, res) {

    napis = ""
    const value = req.query.value
    const toRad = req.query.toRad
    console.log(req.query.value)
    console.log(req.query.toRad)

    if (toRad == "true"){
        toRadTrue(value)
        res.send(napis)
    }
    if (toRad == "false") {
        toRadFalse(value)
        res.send(napis)
    }
});

app.get('/', function (req, res) {
    res.status(404).send("brak strony takiego produktu")
})