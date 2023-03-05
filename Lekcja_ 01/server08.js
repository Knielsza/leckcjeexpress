const express = require("express")
const app = express()
const PORT = 3000;


//


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

const path = require("path")

app.get("/strona1", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/pages/strona1.html"))
    console.log(__dirname)
})

app.get("/strona2", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/pages/strona2.html"))
    console.log(__dirname)
})

app.get("/strona3", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/pages/strona3.html"))
    console.log(__dirname)
})

app.use(express.static('static'))


app.get('/', function (req, res) {
    console.log(req.query) // to jest obiekt z danymi pobranymi z paska adresu    
    console.log(req.query.p1) // to jest jedno pole (właściwość) tego obiektu   
    res.send(req.query) // odesłanie obiektu z danymi z powrotem do przeglądarki   
});

app.get('/', function (req, res) {
    res.status(404).send("brak strony takiego produktu")
})