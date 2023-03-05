const express = require("express")
const app = express()
const PORT = 3000;
var dataList = {}
//
const bodyParser = require("body-parser")
const path = require("path")

app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "static/index04.html"))

})

app.post("/handleForm", function (req, res) {

    res.header("content-type", "application/json")

    datalist = req.body.firstRange
    console.log(dataList)

    res.send(JSON.stringify(datalist));

})

