import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './components';
import { routes } from './contact.routes';

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [],
   declarations: [ ContactComponent ],
   providers: []
})
export class ContactModule { }
