import { Router } from "express";
import { dataset } from "../controllers/analytics";

export const analyticsRoutes = Router();

analyticsRoutes.get("/dataset", dataset);
