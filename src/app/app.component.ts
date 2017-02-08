/*
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './app.actions';

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

    public counter: any;

    constructor(
        public appState: AppState,
        private store: Store<any>
    ) { }

    public ngOnInit() {
        console.log('Initial App State', this.appState.state);
        this.counter = this.store.select('counter');
    }

    increment() {
        this.store.dispatch({ type: INCREMENT })
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT })
    }

}
