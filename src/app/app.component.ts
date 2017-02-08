/*
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import { AppState } from './reducers';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';
import { CounterActions } from './actions/counter.actions';
import { Counter } from './models';
import { Observable } from 'rxjs';


/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['app.component.scss'],
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    public counter: Observable<Counter>;;

    constructor(
        private counterActions: CounterActions,
        private store: Store<AppState>
    ) { }

    public ngOnInit() {
        this.store.select(fromRoot.getCounter).subscribe(res => {
            console.log(res);
        })
    }

    increment() {
        this.store.dispatch(this.counterActions.increment())
    }

    decrement() {
        this.store.dispatch(this.counterActions.decrement())
    }

}
