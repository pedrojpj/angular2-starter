import { Action } from '@ngrx/store';

import { CounterActions } from '../actions/counter.actions';
import { Counter } from '../models/counter.model';

export interface CounterState {
    number: number
}

export const initialState: CounterState = {
    number: 0
}

export function reducer(state = initialState, action: Action): CounterState {

    switch (action.type) {

        case CounterActions.INCREMENT: {
            return (<any>Object).assign({}, state, {
                number: state.number + 1
            });
        }

        case CounterActions.DECREMENT: {
            return (<any>Object).assign({}, state, {
                number: state.number - 1
            });
        }
        

        default: {
            return state;
        }
    }
}

export const getCounter = (state: CounterState) =>  state.number;