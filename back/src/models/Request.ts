import { Db } from 'mongodb';

export type AppRequest = Express.Request & {
  app: {
    locals: {
      db: Db;
    };
  };
};
