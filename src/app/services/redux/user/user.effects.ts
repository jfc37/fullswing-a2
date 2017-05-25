import { LockService } from '../../../common/authentication/lock.service';
import {
    CheckLoginStatusAction,
    LoadProfileFailedAction,
    LoggedInAction,
    LoggedOutAction,
    SetProfileAction
} from './user.actions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
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
              return new LoggedInAction({idToken});
            } else {
              return new LoggedOutAction();
            }
        });

    @Effect()
    public loggedIn$: Observable<Action> = this.actions$
        .ofType(user.LOGGED_IN)
        .map(action => action.payload)
        .do(payload => {
            localStorage.setItem('id_token', payload.idToken);
            this._router.navigate(['/blocks']);
        })
        .switchMap(payload => this._lock.getProfile(payload.idToken))
        .map(payload => ({
            name: payload.nickname || payload.name || payload.email,
            role: payload.claims[0].resource}))
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
