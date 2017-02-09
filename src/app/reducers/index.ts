import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as user from './user.reducers';
import * as counter from './counter.reducers';


export interface AppState {
    user: user.UserState,
    counter: counter.CounterState
}

const reducers = {
    user: user.userReducer,
    counter: counter.reducer
}



const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = compose(combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
    if (ENV !== 'development') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getCounterState = (state: AppState) => {
    console.log(state);
    return state.counter    
}
export const getCounter = createSelector(getCounterState, counter.getCounter);


