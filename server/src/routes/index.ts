import { Router } from "express";

import { analyticsRoutes } from "./analytics";
import { authRoutes } from "./auth";
import { clicksRoutes } from "./interactions/clicks";
import { copiesRoutes } from "./interactions/copy";
import { sharesRoutes } from "./interactions/shares";
import { likesRoutes } from "./interactions/likes";
import { archivesRoutes } from "./interactions/archives";
import { commentsRouter } from "./interactions/comments";
import { NarticlesRoutes } from "./entities/Narticles";

export const rootRouter = Router();

rootRouter.use("/analytics", analyticsRoutes);
rootRouter.use("/auth", authRoutes);
rootRouter.use("/narticles", NarticlesRoutes);

// Interactions
rootRouter.use("/clicks", clicksRoutes);
rootRouter.use("/copies", copiesRoutes);
rootRouter.use("/shares", sharesRoutes);
rootRouter.use("/likes", likesRoutes);
rootRouter.use("/archives", archivesRoutes);
rootRouter.use("/comments", commentsRouter);
