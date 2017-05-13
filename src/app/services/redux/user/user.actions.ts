import { Action } from '@ngrx/store';

export const LOGIN = '[User] Login';
export const LOGIN_SUCCESS = '[User] Login Success';
export const LOGGED_OUT = '[User] Login Out';

export class LoginAction implements Action {
    public readonly type = LOGIN;
}

export class LoginSuccessAction implements Action {
    public readonly type = LOGIN_SUCCESS;
}

export class LoggedOutAction implements Action {
    public readonly type = LOGGED_OUT;
}

export type Actions
    = LoginAction
    | LoginSuccessAction
    | LoggedOutAction;
