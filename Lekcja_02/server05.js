const express = require("express")
const app = express()
const PORT = 3000;
var napis = "";
var checkIfExists = false;

//
const bodyParser = require("body-parser")
const path = require("path")


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "static/addUser.html"))

})

let users = [
    { nick: "111", email: "111@w.pl" },
    { nick: "222", email: "222@w.pl" },
    { nick: "333", email: "333@w.pl" }
]



app.post("/add", function (req, res) {
    console.log(req.body)
    console.log(users)

    //check if email exists
    checkIfExists = false

    for (const user in users){

        if (users[user].email == req.body.email){
            checkIfExists = true
        }
    }

    if (checkIfExists == false){
        users.push({
            nick: req.body.nick,
            email: req.body.email
        })
        res.send(
            "Dodano email"
            )
    }
    else if (checkIfExists == true){
        res.send(
            "Email już istnieje"
            )
    }

})

app.get("/removeUserBySelect", function (req, res) {
    //console.log(users)
    napis = ""

    for (const user in users){
        napis += '<option value="'+ String(users[user].email) +'">'+ String(users[user].email) +'</option>'
    }

    res.send(
        '<form action="/remove" method="POST">' +
        '<input type="submit" value="usuń"><br><br>' + 
            '<select name="email">' +
                napis +
            '</select>' +
        '</form>'
        )
})

app.get("/removeUserByRadio", function (req, res) {
    //console.log(users)
    napis = ""

    for (const user in users){
        napis += '<input type="radio" id="'+ user +'" name="email" value="'+ String(users[user].email) +'">' +
        '<label for="'+ user +'">'+ String(users[user].email) +'</label><br><br>'
    }

    res.send(
        '<form action="/remove" method="POST">' +

            napis +
            '<br><br><input type="submit" value="usuń">' + 
        '</form>'
        )
})

app.get("/removeUserByCheckboxes", function (req, res) {
    //console.log(users)
    napis = ""

    for (const user in users){
        napis += '<input type="checkbox" id="'+ user +'" name="email" value="'+ String(users[user].email) +'">' +
        '<label for="'+ user +'">'+ String(users[user].email) +'</label><br><br>'
    }

    res.send(
        '<form action="/remove" method="POST">' +

            napis +
            '<br><br><input type="submit" value="usuń">' + 
        '</form>'
        )
})

app.post("/remove", function (req, res) {
    console.log(req.body.email)

    //radio & select
    for (const user in users){
        if (users[user].email == req.body.email){
            console.log(users[user])
            delete users[user]
            console.log(users)
        }
    }
    //checkboxes
    for (const k in req.body.email){
        for (const user in users) {
            if (users[user].email == req.body.email[k]){
                console.log(users[user])
                delete users[user]
                console.log(users)
            }
        }
    }

    res.send(
        "Usunięto email"
        )
})