require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = 3005

const app = express()
const { mongoose, db } = require("./database")
const Questionnaire = require("./routes/questionnaire.route")
const FormResponse = require("./routes/FormResponse.route")
const GameResponse = require("./routes/GameResponse.route")

app.use(cors())
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/question', Questionnaire)
app.use('/form', FormResponse)
app.use('/game', GameResponse)

app.get("/", (req, res) => {
    res.send("Hello World")
})

// start the Express server
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`)
})
//test

