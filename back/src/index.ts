import { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { MongoClient } from 'mongodb';
import Config from '../config';
import { RegisterRoutes } from './routes';
import cors from 'cors';
import express from 'express';
import { ValidateError } from 'tsoa';
import { CustomError } from './models/Errors';

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

  app.use(function errorHandler(
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): express.Response | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(422).json({
        message: 'Validation Failed',
        details: err?.fields,
      });
    }

    // Handle custom errors
    if (err instanceof CustomError) {
      return res.status(err.status).json({
        message: err.message,
      });
    }

    if (err instanceof Error) {
      return res.status(500).json({
        message: err.message || 'Internal Server Error',
      });
    }

    next();
  });

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
