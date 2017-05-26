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
      throw new Error('The MainRouter is a singleton class and cannot be created!');
    }
    this.router = express.Router();
    this.setHeaders();
    this.routesAvailable();
  }

  private routesAvailable(): void {
    this.router.use('/dates', DateRouter.getInstance().router);
  }

  private setHeaders(): void {
    this.router.use('*', (req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('charset', 'utf-8');
      req.accepts('application/json');

      next();
    });
  }

  /**
   * Public
   */
  public static getInstance(): MainRouter {
    return MainRouter._instance;
  }
}
