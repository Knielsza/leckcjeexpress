const express = require("express")
const app = express()
const PORT = 3000;
//
const bodyParser = require("body-parser")
const path = require("path")
const hbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));         // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));   // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs');                           // określenie nazwy silnika szablonów


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res){
    res.render('view1.hbs');
 });

app.get("/index", function (req, res) {
    res.render('view1.hbs');   // nie podajemy ścieżki tylko nazwę pliku
})

app.get("/logIn", function (req, res) {
    res.render('view2.hbs');   // nie podajemy ścieżki tylko nazwę pliku
})