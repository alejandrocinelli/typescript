import { Router } from "express";
import { proyectController } from "../controllers/proyectController";
import checkAuth from "../middleware/checkAuth";
const router = Router();

router.get("/", checkAuth, proyectController.getProyects);
//router.get("/:id", checkAuth, proyectController.getProyect);
router.post("/", checkAuth, proyectController.createProyect);
router.get("/user/:id", checkAuth, proyectController.getProyectbyCreator);
//router.put("/:id", checkAuth, proyectController.updateProyect);


export default router;

