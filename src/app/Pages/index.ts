import expressRouter from "../Instances/expressRouter";

const IndexPage = expressRouter.get("/", (req, res) => {
    console.log("req", req.method);
})

export default IndexPage