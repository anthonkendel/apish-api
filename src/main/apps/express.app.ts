import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {Message} from '../models/message.model';
import {MainRouter} from '../routes/main.route';

export class ExpressApp {
  /**
   * Variables
   */
  private expressApp: express.Application;
  private pathPrefix: express.Router;

  /**
   * Private
   */
  private init() {
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

  private routes() {
    let basePath = '/api';
    let versionPath = '/v1';

    this.expressApp.use(basePath + versionPath, MainRouter.getInstance().router);

    // Return a message on resources not found
    this.expressApp.get(basePath + versionPath, (req: Request, res: Response, next: NextFunction) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });
    // Return a message on resources not found
    this.expressApp.post(basePath + versionPath, (req: Request, res: Response, next: NextFunction) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });
  }

  /**
   * Public
   */
  public constructor() {
    this.expressApp = express();
    this.expressApp.set('port', (process.env.PORT || 3000));

    this.init();
    this.routes();
  }

  public start() {
    this.expressApp.listen(this.expressApp.get('port'), () => {
      console.log('App listening on port:' + this.expressApp.get('port'));
    });
  }
}