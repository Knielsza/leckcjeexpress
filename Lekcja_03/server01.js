const express = require("express")
const app = express()
const PORT = 3000;

//
const bodyParser = require("body-parser")
const path = require("path")

app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true })); 


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname , "static/index01.html"))

})

app.post("/handleForm", function (req, res) {
    

    res.header("content-type","application/json")
    const firstNumber = parseInt(req.body.firstNumber) || 0
    const secondNumber = parseInt(req.body.secondNumber) || 0
    const dzialanie = req.body.dzialanie || ""
    let data = {}

    if (dzialanie == "suma"){    
        data = {
            "message": "suma dwóch elementów",
            "wynik": firstNumber + secondNumber
        }
    }
    else if (dzialanie == "roznica"){
        data = {
            "message": "różnica dwóch elementów",
            "wynik": firstNumber - secondNumber
        }
    }
    else if (dzialanie == "iloczyn"){
        data = {
            "message": "iloczyn dwóch elementów",
            "wynik": firstNumber * secondNumber
        }
    }
    else if (dzialanie == "iloraz"){
        data = {
            "message": "iloraz dwóch elementów",
            "wynik": firstNumber / secondNumber
        }
    }
    else if (dzialanie == "wszystkie_dzialania"){
        data = [
            {
                "message": "suma dwóch elementów",
                "wynik": firstNumber + secondNumber
            },
            {
                "message": "różnica dwóch elementów",
                "wynik": firstNumber - secondNumber
            },
            {
                "message": "iloczyn dwóch elementów",
                "wynik": firstNumber * secondNumber
            },
            {
                "message": "iloraz dwóch elementów",
                "wynik": firstNumber / secondNumber
            }
        ]
    }

    res.send(
        JSON.stringify(data, null, 5)
        )
})

