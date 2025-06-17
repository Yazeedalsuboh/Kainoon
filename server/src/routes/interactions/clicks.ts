import { Router } from "express";
import { add, data, clear } from "../../controllers/interactions/clicks";

export const clicksRoutes = Router();

clicksRoutes.get("/:specification/:id", data);
clicksRoutes.post("/", add);
clicksRoutes.delete("/all", clear);
