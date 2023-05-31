import { Router } from "express";
import { proyectController } from "../controllers/proyectController";
import checkAuth from "../middleware/checkAuth";
const router = Router();

router.get("/", checkAuth, proyectController.getProyects);



export default router;

