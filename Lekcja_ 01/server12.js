const express = require("express")
const app = express()
const PORT = 3000;


//


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

const path = require("path")

app.get("/", function (req, res) {
    var hateeml = ""
    for (var i=0; i<100; i++) {
        hateeml += '<a href="/product_id/' + String(i) + '">Product = ' + String(i)+ '</a>  '
    }
    res.send(hateeml)
})


app.get("/product_id/:id", function (req, res) {
    var napis = ""
    let id = req.params.id
    napis = "podstrona z danymi produktu o id = " + String(id)

    res.send(napis)

})