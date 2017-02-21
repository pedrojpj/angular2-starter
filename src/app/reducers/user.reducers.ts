import { Action } from '@ngrx/store';

import { UserActions } from '../actions/user.actions';
import { User } from '../models/user.model';

export interface UserState {
    user: User,
    loading: boolean,
    loaded: boolean
}

export const initialState: UserState = {
    user: { name: 'Angular User' },
    loading: false,
    loaded: true
}

export function userReducer(state = initialState, action: Action): UserState {
    switch (action.type) {

        case UserActions.EDIT_USER: {
            return (<any>Object).assign({}, state, {
                user: action.payload
            });
        }

        default: {
            return state;
        }
    }
}