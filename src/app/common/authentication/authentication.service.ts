import { LoggedOutAction, LoggedInAction } from '../../services/redux/user/user.actions';
import { UserState } from '../../services/redux/user/user-state.model';
import { AppState } from '../../services/redux/app/app-state.model';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthenticationService {
  constructor(private _store: Store<AppState>) {

  }

  public isAuthenticated(): Observable<boolean> {
    return this._store.select('user')
      .filter((user: UserState) => !user.isLoading)
      .map((user: UserState) => user.isLoggedIn);
  }

  public logout() {
    this._store.dispatch(new LoggedOutAction());
  }
}
