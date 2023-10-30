import expressRouter from "../Instances/expressRouter";

const IndexPage = expressRouter.get("/i", (req, res) => {
    console.log("req", req.method);
    res.send("bolacha")
})

export default IndexPage