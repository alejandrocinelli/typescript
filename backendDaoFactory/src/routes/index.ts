import { Router } from "express";
import { Response, Request } from "express";
import userRoutes from "./userRoutes";

const router = Router();

router.use(userRoutes);

export default router;  