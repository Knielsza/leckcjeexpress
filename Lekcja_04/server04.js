const express = require("express")
const app = express()
const PORT = 3000;
//
const bodyParser = require("body-parser")
const path = require("path")
const formidable = require('formidable');


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "static/index02.html"))

})

app.post('/handleUpload', function (req, res) {

    let form = formidable({});
    let obj = []
    var i = 0;
    let time = new Date().getTime();

    form.uploadDir = __dirname + '/static/upload/'  // folder do zapisu zdjęcia

    form.keepExtensions = true // zapis z rozszerzeniem pliku
    form.multiples = true

    form.on("progress", function (bytesReceived, bytesExpected) {

        var czas = (new Date().getTime() - time)

        obj[i] =
        {
            bytesExpected: form.bytesExpected,
            bytesReceived: form.bytesReceived,
            currenttime: String(czas + "ms")
        }
        i += 1
    })

    form.parse(req, function (err, fields, files) {

        res.header("content-type", "application/json")
        res.send(JSON.stringify(obj))

    });

});