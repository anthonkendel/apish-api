import * as express from 'express';
import {NextFunction, Request, Response} from 'express';

class Main {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  private init() {}
}

let main = new Main();
export default main;