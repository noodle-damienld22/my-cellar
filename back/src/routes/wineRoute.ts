import express from "express";
import WineController from "../controllers/wineController";

const routerWine = express.Router();

const controller = new WineController();

routerWine.get("/", async (req, res) => {
  const db = req.app.locals.db;
  const data = await controller.getWines(db);
  return res.send(data);
});

routerWine.get("/wine/:id", async (req, res) => {
  const db = req.app.locals.db;
  const wineId = req.params.id;
  const data = await controller.getWine(db, wineId);
  return res.send(data);
});

routerWine.post("/wine", async (req, res) => {
  const responseBody = req.body;
  const db = req.app.locals.db;
  const data = await controller.createBottleWine(db, responseBody);
  return res.send(data);
});

routerWine.put("/wine/:id", async (req, res) => {
  const db = req.app.locals.db;
  const responseBody = req.body;
  const wineId = req.params.id;
  const data = await controller.updateWine(db, wineId, responseBody);
  return res.send(data);
});

routerWine.delete("/wine/:id", async (req, res) => {
  const wineId = req.params.id;
  const db = req.app.locals.db;
  const data = await controller.deleteWine(db, wineId);
  return res.send(data);
});

export default routerWine;
