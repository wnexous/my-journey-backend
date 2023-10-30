import express from "express"
import IndexPage from "./app/Pages"
import SigninPage from "./app/Pages/signin"
import bodyParser from "body-parser"


// instance express app
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use((req, res, next) => {

    // TODO: Create a auth validation to enable user acess to api
    next()
})

app.use("/api/", IndexPage)
app.use("/api/", SigninPage)

app.listen(4000, () => {
    console.log("backend iniciado com sucesSOS.");
})