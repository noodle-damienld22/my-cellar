export type Wine = {
  _id: string;
  category?: string;
  name: string;
  date: number;
  providedBy: string;
};

export type CreateWine = Omit<Wine, '_id'>;
