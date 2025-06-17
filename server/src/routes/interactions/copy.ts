import { Router } from "express";
import { add, data, clear } from "../../controllers/interactions/copy";

export const copiesRoutes = Router();

copiesRoutes.get("/:specification/:id", data);
copiesRoutes.post("/", add);
copiesRoutes.delete("/all", clear);
