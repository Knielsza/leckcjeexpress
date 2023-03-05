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
app.use(express.json());


app.get("/", function(req, res){
    res.render('index05.hbs', context);
 });

const context = {
    subject: "ćwiczenie 4 - dane z tablicy, select",
    fields:[
        {name:"title"},
        {name:"author"},
        {name:"lang"}        
    ],
    books: [
        { title: "Lalka", author: "B Prus", lang: "PL" },
        { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
        { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
        { title: "Zamek", author: "F Kafka", lang: "CZ" }
   ]  
}

app.post("/handleForm", function (req, res) {

    var data = req.body
    console.log(data)

    if (Object.keys(data).length == 0){
        console.log("data is empty")
        data = {opcja: 'nie wybrano żadnej opcji'}
    }
    res.render('index041.hbs', data)
})