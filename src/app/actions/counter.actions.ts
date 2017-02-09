import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Counter } from '../models/counter.model';

@Injectable()
export class CounterActions {

    static INCREMENT = '[Counter] Increment';
    increment(): Action {
        return {
            type: CounterActions.INCREMENT
        }
    }

    static DECREMENT = '[Counter] Decrement';
    decrement(): Action {
        return {
            type: CounterActions.DECREMENT
        }
    }


}