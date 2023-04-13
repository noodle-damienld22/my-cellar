import { Db } from 'mongodb';
import { Multer } from 'multer';

export type AppRequest = Express.Request & {
  app: {
    locals: {
      db: Db;
      upload: Multer;
    };
  };
};
