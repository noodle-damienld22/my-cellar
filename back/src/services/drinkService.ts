import { Db, ObjectId } from 'mongodb';
import { DrinkCreation, PartialDrink } from '../models/Drink';
import { Drink } from '../models/Drink';
import { NotFoundError } from '../models/Errors';
import { DB_DRINKS_COLLECTION } from '../utils/constants';

async function getDrinks(db: Db): Promise<Drink[]> {
  const items = await db.collection(DB_DRINKS_COLLECTION).find().toArray();
  return items as unknown as Drink[];
}

async function getDrink(db: Db, id: string): Promise<Drink> {
  const _id = new ObjectId(id);
  const item = await db.collection(DB_DRINKS_COLLECTION).findOne({ _id });

  if (!item) {
    throw new NotFoundError(id);
  }

  return item as unknown as Drink;
}

async function addDrink(db: Db, drinkCreation: DrinkCreation): Promise<string> {
  const insertResult = await db.collection(DB_DRINKS_COLLECTION).insertOne(drinkCreation);

  if (!insertResult.insertedId) {
    throw new Error('An error occured while adding drink');
  }

  const drinkId = insertResult.insertedId.toString();
  return drinkId;
}

async function editDrink(db: Db, id: string, updatedDrink: DrinkCreation): Promise<string> {
  const _id = new ObjectId(id);
  const { matchedCount } = await db.collection(DB_DRINKS_COLLECTION).replaceOne({ _id }, { _id, ...updatedDrink });
  if (matchedCount === 0) {
    throw new NotFoundError(id);
  }

  return id;
}

async function patchDrink(db: Db, id: string, updatedDrink: PartialDrink): Promise<string> {
  const _id = new ObjectId(id);
  const { matchedCount } = await db.collection(DB_DRINKS_COLLECTION).updateOne({ _id }, { $set: updatedDrink });
  if (matchedCount === 0) {
    throw new NotFoundError(id);
  }
  return id;
}

async function deleteDrink(db: Db, id: string): Promise<void> {
  const { deletedCount } = await db.collection(DB_DRINKS_COLLECTION).deleteOne({ _id: new ObjectId(id) });

  if (deletedCount === 0) {
    throw new NotFoundError(id);
  }
}

export { getDrinks, getDrink, addDrink, editDrink, patchDrink, deleteDrink };
