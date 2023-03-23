import { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { MongoClient } from 'mongodb';
import Config from '../config';
import { RegisterRoutes } from './routes';
import cors from 'cors';
import express from 'express';

async function main() {
  const app: Application = express();
  const port = process.env.PORT || 8080;
  const allowedOrigins = ['http://localhost:3000'];

  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };

  app.use(morgan('tiny'));
  app.use(cors(options));
  app.use(express.json());
  app.use(express.static('public'));

  // Swagger API Docs
  try {
    app.use(
      '/docs',
      swaggerUi.serve,
      swaggerUi.setup(undefined, {
        swaggerOptions: {
          url: '/swagger.json',
        },
      })
    );
  } catch (err) {
    console.log('error swagger json', err);
  }

  RegisterRoutes(app);

  // Mongo connection
  try {
    const client = new MongoClient(Config.mongoUrl);
    await client.connect();
    const db = client.db();
    app.locals.db = db;
  } catch (error) {
    console.error(error, 'Mongo connection failed');
  }

  app.listen(port, () => {
    console.log('server is running on port : ', port);
  });
}

main();
