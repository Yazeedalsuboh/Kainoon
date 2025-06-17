import { Router } from "express";
import { add, archived, get, clear, remove, getUserArchives } from "../../controllers/interactions/archives";

export const archivesRoutes = Router();

archivesRoutes.post("/", add);
archivesRoutes.delete("/", remove);
archivesRoutes.get("/:specification/:id", get);
archivesRoutes.post("/archived", archived);
archivesRoutes.get("/:user_id", getUserArchives);
archivesRoutes.delete("/all", clear);
