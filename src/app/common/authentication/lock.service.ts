import { LoggedInAction } from '../../services/redux/user/user.actions';
import { AppState } from '../../services/redux/app/app-state.model';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class LockService {
    private _lock = new Auth0Lock('jaLVtw90tXt8tCCBIHIUJLIcP2p2MMdE', 'jfc-dev.au.auth0.com', {
    auth: {
      responseType: 'token',
      redirect: false,
    }
  });

  constructor(private _store: Store<AppState>) {
    this._lock.on('authenticated', (authResult) => {
      this._store.dispatch(new LoggedInAction(authResult));
      this._lock.hide();
    });
  }

  public displayLock(): void {
    this._lock.show();
  }

  public getProfile(idToken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._lock.getProfile(idToken, (error, profile) => {
        if (error) {
          reject(error);
        } else {
          resolve(profile);
        }
      });
    });
  }
}
