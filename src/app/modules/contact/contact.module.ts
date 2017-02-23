import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components';
import { routes } from './contact.routes';

@NgModule({
   imports: [
      RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule,
      CommonModule
   ],
   exports: [],
   declarations: [ ContactComponent ],
   providers: []
})
export class ContactModule { }
