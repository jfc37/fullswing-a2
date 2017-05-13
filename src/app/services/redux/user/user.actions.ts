import { Action } from '@ngrx/store';

export const CHECK_LOGIN_STATUS = '[User] Check Login Status';
export const LOGGED_IN = '[User] Logged In';
export const LOGGED_OUT = '[User] Logged Out';

export class CheckLoginStatusAction implements Action {
    public readonly type = CHECK_LOGIN_STATUS;
}

export class LoggedInAction implements Action {
    public readonly type = LOGGED_IN;

    constructor(public payload: {idToken: string}) {

    }
}

export class LoggedOutAction implements Action {
    public readonly type = LOGGED_OUT;
}

export type Actions
    = CheckLoginStatusAction
    | LoggedInAction
    | LoggedOutAction;
