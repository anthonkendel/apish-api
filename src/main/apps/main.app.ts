import {ExpressApp} from './express.app';

let app: ExpressApp = new ExpressApp();

app.start('127.0.0.1', 3000);

export default app;