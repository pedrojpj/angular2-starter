import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as user from './user.reducers';
import * as counter from './counter.reducers';

const modules = {
    'user': user,
    'counter' : counter
}

export interface AppState {
    user: user.UserState,
    counter: counter.CounterState
}

export const reducers = {
    user: user.userReducer,
    counter: counter.counterReducer
}

export const getCounterState = (state: AppState) => state.counter;

export const getCounter = createSelector(getCounterState, counter.getCounter)

function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        if (action.type === 'SET_ROOT_STATE') {
            return action.payload
        }
        return reducer(state, action);
    }
}

const DEV_REDUCERS = [stateSetter, storeFreeze];

DEV_REDUCERS.push(storeLogger());

const developmentReducer = compose(...DEV_REDUCERS, combineReducers)(reducers);
const productionReducer = compose(combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
    if (ENV !== 'development') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}


