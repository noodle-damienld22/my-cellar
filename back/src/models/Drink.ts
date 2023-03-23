export type Drink = {
  _id: string;
  category?: string;
  name: string;
  date: number;
  providedBy: string;
};

export type DrinkCreation = Omit<Drink, '_id'>;
