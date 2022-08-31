import { App } from './app.js';
import { TrendsController } from './controllers/trendsController.js';

const app = new App(
  [
    new TrendsController(),
  ],
  8000,
);

app.listen();