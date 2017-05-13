import { LoggedOutAction, LoginSuccessAction } from '../../services/redux/user/user.actions';
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
  // Configure Auth0
  private _lock = new Auth0Lock('jaLVtw90tXt8tCCBIHIUJLIcP2p2MMdE', 'jfc-dev.au.auth0.com', {
    auth: {
      responseType: 'token',
      redirect: false,
    }
  });

  constructor(
    private _router: Router,
    private _store: Store<UserState>) {
    // Add callback for lock `authenticated` event
    this._lock.on('authenticated', (authResult) => {
      this._store.dispatch(new LoginSuccessAction());
      localStorage.setItem('id_token', authResult.idToken);
      this._router.navigate(['/dashboard']);
      this._lock.hide();
    });

    if (localStorage.getItem('id_token')) {
      this._store.dispatch(new LoginSuccessAction());
    } else {
      this._store.dispatch(new LoggedOutAction());
    }
  }

  public login() {
    // Call the show method to display the widget.
    this._lock.show();
  }

  public isAuthenticated(): Observable<boolean> {
    return this._store.select(user => user)
      .filter(user => !user.isLoading)
      .map(user => user.isLoggedIn);
  }

  public logout() {
    localStorage.removeItem('id_token');
    this._router.navigate(['/login']);
    this._store.dispatch(new LoggedOutAction());
  }
}
