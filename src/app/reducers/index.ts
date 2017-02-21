import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as counter from './counter.reducers';

export interface AppState {
    counter: counter.CounterState;
}

const reducers: any = {
    counter: counter.reducer
};

const developmentReducer: any = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: any = compose(combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
    if (ENV !== 'development') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getCounterState: any = (state: AppState) => {
    console.log(state);
    return state.counter;
}
export const getCounter: any = createSelector(getCounterState, counter.getCounter);


