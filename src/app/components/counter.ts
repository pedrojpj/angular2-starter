import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterActions } from '../actions';
import { Counter } from '../models';
import { Observable, Subject } from 'rxjs';

import * as fromRoot from '../reducers';


@Component({
    selector: 'counter',
    templateUrl: 'counter.html'
})
export class CounterComponent implements OnDestroy {

    public counter$: Observable<any>;
    public counter: Number;

    private destroyed$: Subject<any> = new Subject<any>();

    constructor(
        private store: Store<fromRoot.AppState>,
        private counterActions: CounterActions
    ) {
       this.counter$ = this.store.select(state => state.counter.number);
       this.counter$
        .takeUntil(this.destroyed$)
        .subscribe(counter => {
            this.counter = counter
        })
    }


    increment() {
        this.store.dispatch(this.counterActions.increment())
    }

    decrement() {
        this.store.dispatch(this.counterActions.decrement())
    }

    ngOnDestroy() {
        this.destroyed$.next();
    }

}