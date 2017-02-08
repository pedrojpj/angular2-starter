import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User } from '../models/user.model';

@Injectable()

export class UserActions {

    static EDIT_USER = '[User] Edit User';
    edictUser(user: User): Action {
        return {
            type: UserActions.EDIT_USER,
            payload: user
        }
    }

    static LOGOUT = '[USER] Logout';
    logout(): Action {
        return {
            type: UserActions.LOGOUT
        }
    }

    static LOGOUT_FAIL = '[User] Logout Fail';
    logoutFail(err: Error): Action {
        return {
            type: UserActions.LOGOUT_FAIL,
            payload: err
        };
    }


}