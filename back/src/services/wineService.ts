import { Db, ObjectId } from "mongodb";
import { CreateWine } from "../models/Wine";
import { Wine } from "../models/Wine";

async function getWines(db: Db): Promise<Wine[]> {
  const items = await db.collection("wines").find().toArray();
  return items as unknown as Wine[];
}

async function getWine(db: Db, id: string): Promise<any> {
  const _id = new ObjectId(id);
  const wine = await db.collection("wines").findOne({ _id });
  if (!wine) {
    console.error("GetWine not found wines");
  }
  return wine;
}

async function addWine(db: Db, createBottleWine: CreateWine): Promise<string> {
  const insertResult = await db.collection("wines").insertOne(createBottleWine);
  const wineId = insertResult.insertedId.toString();
  return wineId;
}

async function modifyWine(
  db: Db,
  id: string,
  updateWine: CreateWine
): Promise<string> {
  const _id = new ObjectId(id);
  const { matchedCount } = await db
    .collection("wines")
    .updateOne({ _id }, { $set: updateWine });
  if (matchedCount === 0) {
    console.error("Update not found wines");
  }
  return id;
}

async function deleteWineId(db: Db, id: string): Promise<void> {
  console.log("id", id);

  const { deletedCount } = await db
    .collection("wines")
    .deleteOne({ _id: new ObjectId(id) });

  if (deletedCount === 0) {
    console.error("Delete not found wines");
  }
}

export { getWines, getWine, addWine, modifyWine, deleteWineId };
