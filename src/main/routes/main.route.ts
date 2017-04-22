import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import date from './date.route';

class MainRouter {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    this.router.use('/dates', date.router);
  }
}

let main = new MainRouter();
export default main;