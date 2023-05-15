import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import Config from './config/config';
import Routes from './routes/Routes';
import Boostrap from './bootstrap/Bootstrap';
import Logger from './app/Utils/Logger';
import { createFoldersIfDoesntExist } from './app/Utils/Common'
import { onlyAuth } from './app/Middlewares/auth'



// loads config and env variables in process
Config();
createFoldersIfDoesntExist();
const app = express();

// parse json request body
app.use(express.json({ limit: "500mb" }));

// parse urlencoded request body
app.use(express.urlencoded({ limit: "500mb", extended: true }));

// security middleware
app.use(helmet());

app.use('/api/health/', Routes.HealthApi);

app.use('/api/user', [cors()]);
app.use('/api/user', Routes.UserRouter);

/**
 * uncaught exception handling
 */
 process.on('uncaughtException', (reason) => {
  Logger.error('uncaughtException', new Error(reason));
});

// initalizing global required services and creating server
Promise.all(Boostrap.intializeServices())
  .then(() => {
    console.log(process.saarthi.app.port)
    app.listen(process.saarthi.app.port, () => {
      Logger.info('Server Started Successfully ');
    });
  })
  .catch((error) => {
    Logger.error('BoostrapInitiailizeServices', new Error(error));
  });