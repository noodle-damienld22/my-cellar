import { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import router from "./routes";

const express = require("express");

const app: Application = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

// Swagger API Docs
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(router);

app.listen(port, () => {
  console.log("server is running on port : ", port);
});
