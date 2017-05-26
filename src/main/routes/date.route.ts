import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {DateController} from '../controllers/date.controller';
import {Message} from '../models/message.model';

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
      throw new Error('The DateRouter is a singleton class and cannot be created!');
    }
    this.router = express.Router();
    this.setHeaders();
    this.routesAvailable();
  }

  private routesAvailable(): void {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        let response = DateController.getInstance().getDate(req.query.type, req.query.format);
        res.status(200).send(response);
      } catch (err) {
        res.status(400).send(new Message(err.toString()).toJson());
      }
    });

    this.router.post('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        let response = DateController.getInstance().createDate(req.body.year, req.body.month, req.body.day, req.query.format);
        res.status(200).send(response);
      } catch (err) {
        res.status(400).send(new Message(err.toString()).toJson());
      }
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
