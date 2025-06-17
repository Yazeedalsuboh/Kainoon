import { Router } from "express";
import { all, login, signup } from "../controllers/auth";

export const authRoutes = Router();

authRoutes.get("/", all);
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
