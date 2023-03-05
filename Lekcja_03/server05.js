const express = require("express")
const app = express()
const PORT = 3000;
let dataList = {}
var kolorKwadratu = {}
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
    res.sendFile(path.join(__dirname, "static/index05.html"))

})

app.post("/handleForm", function (req, res) {

    res.header("content-type", "application/json")

    dataList = (req.body)

    
    //console.log(dataList)

    res.send(
        {
            bgcolor: `rgba(` + String(dataList.Red) +`, `+ String(dataList.Green) +
                `, `+ String(dataList.Blue) +`, ` + String(dataList.AAAA) + `%)`
        }
    );

})
// `<div class="kwadrat" style="
// background-color: rgba(` + String(dataList.Red) +`, `+ String(dataList.Green) +`, `+ String(dataList.Blue) +`, ` + String(dataList.AAAA) + `%)
// "> 

// </div>`
