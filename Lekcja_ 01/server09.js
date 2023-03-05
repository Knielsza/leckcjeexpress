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

function Kwadraty(ilosc, kolor) {
    console.log(kolor)
    console.log(ilosc)
    for (var i=0; i<ilosc; i++){
        napis += '<div style="display: inline-block; width: 100px; height: 100px; text-align: center; font-size: 30px; color: white; margin: 10px; background-color: '+ kolor +';" >' + (i+1) + '</div>'
    }
}

app.get('/', function (req, res) {

    napis = ""
    const count = req.query.count
    const bgcolor = req.query.bg
    Kwadraty(count, bgcolor)
    res.send(napis)
});

app.get('/', function (req, res) {
    res.status(404).send("brak strony takiego produktu")
})