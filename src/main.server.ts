import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { AppServerModuleNgFactory } from '../compiled/src/app/app.server.module.ngfactory';
import * as express from 'express';
import { ngExpressEngine } from './express-engine';

enableProdMode();

const app = express();

app.engine('html', ngExpressEngine({
   baseUrl: 'http://localhost:4200',
   bootstrap: [AppServerModuleNgFactory]
}));

app.set('view engine', 'html');
app.set('views', 'src')

app.get('/', (req: any, res: any) => {
   res.render('index', { req });
});

app.get('/lazy', (req: any, res: any) => {
   res.render('index', { req });
});

app.listen(8000, () => {
   console.log('listening...')
});