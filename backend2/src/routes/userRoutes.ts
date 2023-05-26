import { Router } from "express";
import { authController } from "../controllers/authController";

const router = Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

router.get("/login", (req, res) => {
    res.send("Login");
    }
);


export default router;