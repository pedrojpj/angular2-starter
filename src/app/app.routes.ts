import { Routes } from '@angular/router';
import { HomeComponent } from './components';

export const routes: Routes = [
   {
      path: '', component: HomeComponent
   },
   {
      path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule'
   }
];
