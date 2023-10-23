import express from "express"


// instance express appw
const app = express()


app.use((req, res, next) => {
    console.log(req.method);


    next()
})

app.get("/:id", (req, res) => {
    console.log(req.params);

    res.json(req.params)
})


app.listen(4000, () => {
    console.log("backend iniciado com sucesSOS.");
})