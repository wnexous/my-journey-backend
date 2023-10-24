import express from "express"
import IndexPage from "./app/Pages"
import SigninPage from "./app/Pages/signin"

// instance express app
const app = express()

app.use((req, res, next) => {

    // TODO: Create a auth validation to enable user acess to api
    next()
})

app.use("", IndexPage)
app.use("", SigninPage)

app.listen(4000, () => {
    console.log("backend iniciado com sucesSOS.");
})