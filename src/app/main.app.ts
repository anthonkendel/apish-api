import {ExpressApp} from './express.app';

let app: ExpressApp = new ExpressApp();

app.start('localhost', 3000);