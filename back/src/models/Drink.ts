export type Drink = {
  _id: string;
  category?: string;
  name: string;
  date: number;
  providedBy: string;
  images?: string[];
};

export type DrinkCreation = Omit<Drink, '_id'>;
export type PartialDrink = Partial<DrinkCreation>;
