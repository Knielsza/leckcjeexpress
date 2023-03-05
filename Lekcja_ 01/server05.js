const express = require("express")
const app = express()
const PORT = 3000;


//


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

const path = require("path")


app.get("/", function (req, res) {
    res.send("dane html odesłane z serwera do przeglądarki")
})

app.get("/", function (req, res) {
    console.log("ścieżka do katalogu głównego aplikacji: " + __dirname)
    res.sendFile(path.join(__dirname + "/static/index.html"))

})

app.get("/strona", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
    console.log(__dirname)
})

app.use(express.static('static'))


app.get('/', function (req, res) {
    console.log(req.query) // to jest obiekt z danymi pobranymi z paska adresu    
    console.log(req.query.p1) // to jest jedno pole (właściwość) tego obiektu   
    res.send(req.query) // odesłanie obiektu z danymi z powrotem do przeglądarki   
});

app.get('/user/:id', function (req, res) {

    let id = req.params.id
    if (id == 2)
        res.send("odsyłam stronę usera z id = 2")
    else
        res.send("taki user nie istnieje")
});