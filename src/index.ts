import express from "express"


// instance express app
const app = express()


app.get("/:id", (req, res) => {
    console.log(req);
})


app.listen(4000, () => {
    console.log("backend iniciado com sucesso");
})