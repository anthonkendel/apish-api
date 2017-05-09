import * as express from 'express';
import {DateRouter} from './date.route';
import {Request, Response, NextFunction} from 'express';

export class MainRouter {
  /**
   * Variables
   */
  private static _instance: MainRouter = new MainRouter();
  public router: express.Router;

  /**
   * Private
   */
  private constructor() {
    if (MainRouter._instance) {
      throw new Error('The Logger is a singleton class and cannot be created!');
    }
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    this.router.use('/dates', DateRouter.getInstance().router);
  }

  /**
   * Public
   */
  public static getInstance() {
    return MainRouter._instance;
  }
}
