import { Router } from "express";
import { all, add, byId, remove } from "../../controllers/entities/Narticles";

export const NarticlesRoutes = Router();

NarticlesRoutes.get("/", all);
NarticlesRoutes.post("/", add);
NarticlesRoutes.get("/:id", byId);
NarticlesRoutes.delete("/:id", remove);
