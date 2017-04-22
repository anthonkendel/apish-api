import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {Message} from '../models/message.model';
import mainRoute from '../routes/main.route';

export class ExpressApp {
  expressApp: express.Application;
  pathPrefix: express.Router;

  constructor() {
    this.expressApp = express();
  }

  start(host: string, port: number) {
    this.init();
    this.routes();

    this.expressApp.listen(port, host, () => {
      console.log('App listening on ' + host + ':' + port);
    });
  }

  init() {
    this.expressApp.use('*', (req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('charset', 'utf-8');
      req.accepts('application/json');

      next();
    });
  }

  routes() {
    let basePath = '/api/v1';
    this.expressApp.use(basePath, mainRoute.router);

    // Return a message on resources not found
    this.expressApp.get(basePath, (req: Request, res: Response, next: NextFunction) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });

    this.expressApp.post(basePath, (req: Request, res: Response, next: NextFunction) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });
  }
}