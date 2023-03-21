import { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { MongoClient } from "mongodb";
import Config from "../config";
import routerWine from "./routes/wineRoute";
import cors from "cors";

const express = require("express");
const app: Application = express();
const port = process.env.PORT || 8080;
const allowedOrigins = ["http://localhost:8080"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors(options));
app.use(express.static("public"));

// Swagger API Docs
try {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
} catch (err) {
  console.log("error swagger json", err);
}

app.use(routerWine);

async function main() {
  // Mongo connection
  try {
    const client = new MongoClient(Config.mongoUrl);
    await client.connect();
    const db = client.db();
    app.locals.db = db;
  } catch (error) {
    console.error(error, "Mongo connection failed");
  }

  app.listen(port, () => {
    console.log("server is running on port : ", port);
  });
}

main();
