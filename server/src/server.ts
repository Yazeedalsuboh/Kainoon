import express from "express";
import { CLIENT_HOSTNAME, CLIENT_PORT, SERVER_HOSTNAME, SERVER_PORT } from "./config/secrets";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
app.use(
	cors({
		origin: `http://${CLIENT_HOSTNAME}:${CLIENT_PORT}`,
	})
);

import { rootRouter } from "./routes";
app.use("/api", rootRouter);

app.listen(SERVER_PORT, () => {
	console.log(`Server is running on http://${SERVER_HOSTNAME}:${SERVER_PORT}`);
});
