import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import {Message} from '../models/message.model';
import {MainRouter} from '../routes/main.route';

export class ExpressApp {
  /**
   * Variables
   */
  public expressApp: express.Application;

  private readonly BASE_PATH: string = '/api';
  private readonly VERSION_PATH: string = '/v1';
  private readonly DEFAULT_PORT: number = 3000;

  /**
   * Private
   */
  private routesAvailable(): void {
    this.expressApp.use(this.BASE_PATH + this.VERSION_PATH, MainRouter.getInstance().router);
  }

  private routesNotAvailable(): void {
    // Return a message on resources not found
    this.expressApp.use(this.BASE_PATH, (req: Request, res: Response) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });

    // Return a message on resources not found
    this.expressApp.use(this.BASE_PATH + this.VERSION_PATH, (req: Request, res: Response) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });
  }

  private staticSite(): void {
    this.expressApp.use('/', express.static('public'));
  }

  private setHeaders(): void {
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
    this.expressApp.set('port', (process.env.PORT || this.DEFAULT_PORT));

    this.staticSite();
    this.setHeaders();
    this.routesAvailable();
    this.routesNotAvailable();
  }

  public start(): void {
    this.expressApp.listen(this.expressApp.get('port'), () => {
      console.log('App listening on port:' + this.expressApp.get('port'));
    });
  }
}