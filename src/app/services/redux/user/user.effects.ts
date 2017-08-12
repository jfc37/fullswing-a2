import { LockService } from '../../../common/authentication/lock.service';
import {
    CheckLoginStatusAction,
    LoadProfileFailedAction,
    LoggedInAction,
    LoggedOutAction,
    SetIdTokenAction,
    SetProfileAction
} from './user.actions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import * as user from './user.actions';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserEffects {

    @Effect()
    public checkIfLoggedIn$: Observable<Action> = this.actions$
        .ofType(user.CHECK_LOGIN_STATUS)
        .startWith(new CheckLoginStatusAction())
        .map(() => {
            const idToken = localStorage.getItem('id_token');
            const hasValidIdToken = idToken && tokenNotExpired(null, idToken);
            if (hasValidIdToken) {
              return new SetIdTokenAction(idToken);
            } else {
              return new LoggedOutAction();
            }
        });

    @Effect()
    public loggedIn$: Observable<Action> = this.actions$
        .ofType(user.LOGGED_IN)
        .map((action: user.LoggedInAction) => action.idToken)
        .do(() => this._router.navigate(['/dashboard']))
        .map(idToken => new SetIdTokenAction(idToken));

    @Effect()
    public setIdToken$: Observable<Action> = this.actions$
        .ofType(user.SET_ID_TOKEN)
        .map((action: user.SetIdTokenAction) => action.idToken)
        .do(idToken => localStorage.setItem('id_token', idToken))
        .switchMap(idToken => this._lock.getProfile(idToken))
        .map(payload => ({
            name: payload.nickname || payload.name || payload.email,
            role: payload.claims[0].resource
        }))
        .map(payload => new SetProfileAction(payload))
        .catch(error => Observable.of(new LoadProfileFailedAction(error)));

    @Effect()
    public loggedOut$: Observable<Action> = this.actions$
        .ofType(user.LOGGED_OUT)
        .do(() => {
            localStorage.removeItem('id_token');
            this._router.navigate(['/login']);
        })
        .switchMap(() => empty());

    constructor(
        private actions$: Actions,
        private _router: Router,
        private _lock: LockService) { }
}
