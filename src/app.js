import express from "express";
import morgan from "morgan";
import cors from "cors";

// Import routes
import personRoutes from "./routes/person.routes.js";
import addressRoutes from "./routes/address.routes.js";

const app = express();
app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/person", personRoutes);
app.use("/api/address", addressRoutes);

export default app;
