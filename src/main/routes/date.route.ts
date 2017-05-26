import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {Date} from '../models/date.model';

export class DateRouter {
  /**
   * Variables
   */
  private static _instance: DateRouter = new DateRouter();
  public router: express.Router;

  /**
   * Private
   */
  private constructor() {
    if (DateRouter._instance) {
      throw new Error('The Logger is a singleton class and cannot be created!');
    }
    this.router = express.Router();
    this.setHeaders();
    this.routesAvailable();
  }

  private routesAvailable(): void {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      let type = req.query.type;
      let format = req.query.format;

      res.status(200).send(new Date(type).toJson(format));
    });
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
  public static getInstance(): DateRouter {
    return DateRouter._instance;
  }
}
