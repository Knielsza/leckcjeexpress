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

    form.uploadDir = __dirname + '/static/upload/'  // folder do zapisu zdjęcia

    form.keepExtensions = true // zapis z rozszerzeniem pliku
    form.multiples = true
    
    form.parse(req, function (err, fields, files) {
        
        let obj = {
            bytesExpected: form.bytesExpected,
            bytesReceived: form.bytesReceived
        }

        res.send(obj)
        console.log(form.bytesExpected, form.bytesReceived);

    });

});