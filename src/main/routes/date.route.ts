import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {Date} from '../models/date.model';

class DateRouter {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      let type = req.query.type;

      res.status(200).send(new Date(type).toJson());
    });
  }
}

let date = new DateRouter();
export default date;