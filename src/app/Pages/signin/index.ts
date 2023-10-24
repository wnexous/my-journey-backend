import expressRouter from "../../Instances/expressRouter";

const SigninPage = expressRouter.get("/signin", (req, res) => {
    console.log(req);
})

export default SigninPage