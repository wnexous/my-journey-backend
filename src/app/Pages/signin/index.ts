import expressRouter from "../../Instances/expressRouter";

const SigninPage = expressRouter.post("/signin", (req, res) => {
    console.log(req.body);
    res.send("foi")
})

export default SigninPage