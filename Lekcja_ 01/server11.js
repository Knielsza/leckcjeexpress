const express = require("express")
const app = express()
const PORT = 3000;


//


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

const path = require("path")
app.use(express.static('static'))

app.get("/product_id/:id", function (req, res) {
    let id = req.params.id
    if (id == "2") {
        console.log(id + "=2")
        res.sendFile(path.join(__dirname + "/static/products/product2.html"))
    }
    else if (id == "3") {
        console.log(id + "=3")
        res.sendFile(path.join(__dirname + "/static/products/product3.html"))
    }
    else if (id == "1") {
        console.log(id + "=1")
        res.sendFile(path.join(__dirname + "/static/products/product1.html"))
    }
    else {
        res.send("nie znaleziono strony z takim id produktu")
    }

})


