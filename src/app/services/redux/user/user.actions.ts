import { userRole } from './user.model';
import { Action } from '@ngrx/store';

export const CHECK_LOGIN_STATUS = '[User] Check Login Status';
export const LOGGED_IN = '[User] Logged In';
export const SET_PROFILE = '[User] Set Profile';
export const LOAD_PROFILE_FAILED = '[User] Load Profile Failed';
export const LOGGED_OUT = '[User] Logged Out';

export class CheckLoginStatusAction implements Action {
    public readonly type = CHECK_LOGIN_STATUS;
}

export class LoggedInAction implements Action {
    public readonly type = LOGGED_IN;

    constructor(public payload: {idToken: string}) {

    }
}

export class SetProfileAction implements Action {
    public readonly type = SET_PROFILE;

    constructor(public payload: {name: string, role: userRole}) {

    }
}

export class LoadProfileFailedAction implements Action {
    public readonly type = LOAD_PROFILE_FAILED;

    constructor(public error: string) {

    }
}

export class LoggedOutAction implements Action {
    public readonly type = LOGGED_OUT;
}

export type Actions
    = CheckLoginStatusAction
    | LoggedInAction
    | SetProfileAction
    | LoadProfileFailedAction
    | LoggedOutAction;
