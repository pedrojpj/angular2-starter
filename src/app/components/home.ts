import { Component, AfterViewInit } from '@angular/core';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomeComponent implements AfterViewInit {
   constructor() { }

   ngAfterViewInit(): void {
      setTimeout(function() {
          throw new Error('custom error');

      }, 300);
   }
}