import { Router } from "express";
import { Response, Request } from "express";
import { userController } from "../controllers/userController";

const routerUser = Router();

routerUser.get("/user",
    (req : Request, res : Response) => {
        res.send("Hello User");
    } );

routerUser.post("/user", userController.registerUser);    

export default routerUser;