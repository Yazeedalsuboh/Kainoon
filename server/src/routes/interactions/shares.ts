import { Router } from "express";
import { add, data, clear } from "../../controllers/interactions/shares";

export const sharesRoutes = Router();

sharesRoutes.get("/:specification/:id", data);
sharesRoutes.post("/", add);
sharesRoutes.delete("/all", clear);
