import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {Message} from '../models/message.model';
import {MainRouter} from '../routes/main.route';

export class ExpressApp {
  /**
   * Variables
   */
  public expressApp: express.Application;

  private readonly BASE_PATH = '/api';
  private readonly VERSION_PATH = '/v1';

  /**
   * Private
   */
  private serveRoutes() {
    this.expressApp.use(this.BASE_PATH + this.VERSION_PATH, MainRouter.getInstance().router);
  }

  private serveRoutesNotAvailable() {
    // Return a message on resources not found
    this.expressApp.use(this.BASE_PATH, (req: Request, res: Response) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });

    // Return a message on resources not found
    this.expressApp.use(this.BASE_PATH + this.VERSION_PATH, (req: Request, res: Response) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });
  }

  private serveStaticSite() {
    this.expressApp.use('/', express.static('public'));
  }

  private setHeaders() {
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

  /**
   * Public
   */
  public constructor() {
    this.expressApp = express();
    this.expressApp.set('port', (process.env.PORT || 3000));

    this.serveStaticSite();
    this.setHeaders();
    this.serveRoutes();
    this.serveRoutesNotAvailable();
  }

  public start() {
    this.expressApp.listen(this.expressApp.get('port'), () => {
      console.log('App listening on port:' + this.expressApp.get('port'));
    });
  }
}