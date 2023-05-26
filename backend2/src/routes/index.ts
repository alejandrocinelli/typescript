import { Router } from "express";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/auth", (userRoutes));


export default router;