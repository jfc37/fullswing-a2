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

  constructor(private _router: Router) {
    // Add callback for lock `authenticated` event
    this._lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this._router.navigate(['/dashboard']);
      this._lock.hide();
    });
  }

  public login() {
    // Call the show method to display the widget.
    this._lock.show();
  }

  public isAuthenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  }

  public logout() {
    localStorage.removeItem('id_token');
    this._router.navigate(['/login']);
  }
}
