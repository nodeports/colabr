import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/task";
import connectDB from "./utils/db";

const app = express();

app.use(bodyParser.json());
app.use("/api", taskRoutes);

connectDB();

export default app;
