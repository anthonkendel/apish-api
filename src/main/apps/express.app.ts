import * as express from 'express';
import * as bodyParser from 'body-parser';
import {NextFunction, Request, Response} from 'express';
import {Message} from '../models/message.model';
import {MainRouter} from '../routes/main.route';


const BASE_PATH: string = '/api';
const VERSION_PATH: string = '/v1';
const DEFAULT_PORT: number = 3000;

export class ExpressApp {
  /**
   * Variables
   */
  public expressApp: express.Application;

  /**
   * Private
   */
  private routesAvailable(): void {
    this.expressApp.use(BASE_PATH + VERSION_PATH, MainRouter.getInstance().router);
  }

  private routesNotAvailable(): void {
    // Return a message on resources not found
    this.expressApp.use(BASE_PATH, (req: Request, res: Response) => {
      res.send(new Message('Could not find the requested resource').toJson());
    });

    // Return a message on resources not found
    this.expressApp.use(BASE_PATH + VERSION_PATH, (req: Request, res: Response) => {
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
    this.expressApp.set('port', (process.env.PORT || DEFAULT_PORT));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({extended: false}));

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