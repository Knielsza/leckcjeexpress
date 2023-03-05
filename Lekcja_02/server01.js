const express = require("express")
const app = express()
const PORT = 3000;


//

const path = require("path")
app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/formularz.html"))

})
app.get("/handleForm", function(req, res){
    console.log(req.query.color)
    res.send(req.query)   
})