import { env } from 'node:process';

const Config = {
  mongoUrl: env.MONGO_URL ?? 'mongodb://mongo/myCellar ',
};

export default Config;
