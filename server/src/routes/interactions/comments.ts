import { Router } from "express";
import { add, clear } from "../../controllers/interactions/comments";

export const commentsRouter = Router();

commentsRouter.post("/", add);
commentsRouter.delete("/all", clear);
