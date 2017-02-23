import { Routes } from '@angular/router';
import { HomeComponent, ErrorComponent } from './components';

export const routes: Routes = [
   {
      path: '', redirectTo: 'home', pathMatch: 'full'
   },
   {
      path: 'home', component: HomeComponent
   },
   {
      path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule'
   },
   {
      path: 'not-found', component: ErrorComponent, data: { error: '404 not found' }
   },
   {
      path: 'error', component: ErrorComponent
   },
   {
      path: '**', redirectTo: '/not-found'
   }
];
