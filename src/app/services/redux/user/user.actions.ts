import { Action } from '@ngrx/store';

export const LOGIN = '[User] Login';
export const LOGIN_SUCCESS = '[User] Login Success';

export class LoginAction implements Action {
    public readonly type = LOGIN;
}

export class LoginSuccessAction implements Action {
    public readonly type = LOGIN_SUCCESS;
}

export type Actions
    = LoginAction
    | LoginSuccessAction;
