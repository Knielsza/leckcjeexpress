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
app.use(express.json());
//
const Datastore = require('nedb')

const coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});
//

app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.render('index.hbs');
});

app.get("/Add", function (req, res) {
    res.render('add.hbs');
});

app.get("/Edit", function (req, res) {
    res.render('edit.hbs');
});

app.get("/List", function (req, res) {
    res.render('list.hbs');
});

app.get("/handleForm", function (req, res) {
    console.log(req.body)
});

const doc = {
    a: "a",
    b: "b"
};

// coll1.insert(doc, function (err, newDoc) {
//     console.log("dodano dokument (obiekt):")
//     console.log(newDoc)
//     console.log("losowe id dokumentu: " + newDoc._id)
// });

// console.log("PRZED FOR: " + new Date().getMilliseconds())
// for (let i = 0; i < 3; i++) {
//     let doc = {
//         a: "a" + i,
//         b: "b" + i
//     };
//     coll1.insert(doc, function (err, newDoc) {
//         console.log("id dokumentu: " + newDoc._id, "DODANO: " + new Date().getMilliseconds())
//     });
// }
// console.log("PO FOR: " + new Date().getMilliseconds())

// coll1.find({}, function (err, docs) {
//     //zwracam dane w postaci JSON
//     console.log("----- tablica obiektów pobrana z bazy: \n")
//     console.log(docs)
//     console.log("----- sformatowany z wcięciami obiekt JSON: \n")
//     console.log(JSON.stringify({ "docsy": docs }, null, 5))
// });

// coll1.find({ a: "a1" }, function (err, docs) {
//     console.log(JSON.stringify({ "docsy": docs }, null, 5))
// });

// coll1.count({}, function (err, count) {
//     console.log("dokumentów jest: ", count)
// });

// coll1.count({ a: "a1" }, function (err, count) {
//     console.log("dokumentów jest: ", count)
// });

// coll1.remove({ a: "a2" }, {}, function (err, numRemoved) {
//     console.log("usunięto dokumentów: ", numRemoved)
// });

// coll1.remove({ a: "a" }, { multi: true }, function (err, numRemoved) {
//     console.log("usunięto dokumentów: ", numRemoved)
// });

// coll1.remove({}, { multi: true }, function (err, numRemoved) {
//     console.log("usunięto wszystkie dokumenty: ", numRemoved)
// });