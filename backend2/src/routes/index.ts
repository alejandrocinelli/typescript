import { Router } from "express";
import userRoutes from "./userRoutes";
import checkAuth from "../middleware/checkAuth";
import proyectRoutes from "./proyectRoutes";

const router = Router();

router.use("/auth", (userRoutes));
router.use("/proyects" , (proyectRoutes)  )

export default router;