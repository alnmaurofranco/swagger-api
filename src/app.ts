import express from "express";
import swaggerUI from "swagger-ui-express";

import { configSwagger } from "./config/swagger";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use(
  ["/docs", "/api-docs", "/openapi"],
  swaggerUI.serve,
  swaggerUI.setup(configSwagger)
);

app.use("/users", usersRoutes);

export { app };
