import { Router } from "express";
import { add, get, liked, remove, clear, getUserLikes } from "../../controllers/interactions/likes";

export const likesRoutes = Router();

likesRoutes.post("/", add);
likesRoutes.delete("/", remove);
likesRoutes.get("/:specification/:id", get);
likesRoutes.post("/liked", liked);
likesRoutes.delete("/all", clear);
likesRoutes.get("/:user_id", getUserLikes);
