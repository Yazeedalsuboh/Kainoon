import dotenv from "dotenv";

dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT;
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
export const CLIENT_PORT = process.env.CLIENT_PORT;
export const CLIENT_HOSTNAME = process.env.CLIENT_HOSTNAME;
export const JWT_SECRET = process.env.JWT_SECRET;
