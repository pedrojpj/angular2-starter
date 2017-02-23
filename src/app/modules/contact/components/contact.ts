import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
   selector: 'page-contact',
   templateUrl: 'contact.html'
})
export class ContactComponent implements OnInit {

   public form: FormGroup;
   public submitted: boolean;
   public errorMessage: string;
   public okMessage: string;

   constructor(
      private fb: FormBuilder
   ) { }

   ngOnInit(): void {

      this.form = new FormGroup({
         name: new FormControl('', Validators.required),
         email: new FormControl('', Validators.required),
         phone: new FormControl(''),
         message: new FormControl('', Validators.required)
      });

   }

   save(values: any, valid: boolean): void {

      this.submitted = true;

      if (!valid) {
         this.errorMessage = 'All fields are required';
      } else {
         this.okMessage = 'Your message has been sent correctly we will answer you as soon as possible';
      }

   }

   clearForm(): void {
      this.form.reset();
   }
}