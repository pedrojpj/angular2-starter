import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

@Component({
   selector: 'page-error',
   templateUrl: 'error.html'
})
export class ErrorComponent implements OnInit {

   public errorMessage: string;
   public errorStack: any;

   constructor(
      private currentRoute: ActivatedRoute
   ) {
   }

   ngOnInit(): void {
      this.currentRoute.data.subscribe(res => {
         this.errorMessage = res['error']
      })

      this.currentRoute.params.subscribe(res => {
         console.log(res);
         this.errorMessage = res['error'];
         this.errorStack = res['stack'];
      })
   }
}
