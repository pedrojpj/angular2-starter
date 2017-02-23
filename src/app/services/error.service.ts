import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorService implements ErrorHandler {

  constructor(
    private injector: Injector
  ) {
  }

  get router(): Router {
    return this.injector.get(Router);
  };

  handleError(error: any): void {
    console.error(error);
    this.router.navigate(['error', { error: error.message, stack: error.stack }], { skipLocationChange: true });
  }
}