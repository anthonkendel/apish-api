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
    this.routes();
  }

  private routes() {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      let type = req.query.type;

      res.status(200).send(new Date(type).toJson());
    });
  }

  /**
   * Public
   */
  public static getInstance() {
    return DateRouter._instance;
  }
}