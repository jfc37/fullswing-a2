import * as user from '../../services/redux/user/user.selectors';
import { AppState } from '../../services/redux/app/app-state.model';
import { UserState } from '../../services/redux/user/user-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * Guard to against users not logged in
 */
@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _store: Store<AppState>
    ) {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.waitUntilLoaded()
            .switchMap(() => this.isLoggedIn())
            .do(isLoggedIn => {
                if (!isLoggedIn) {
                    this._router.navigate(['/login']);
                }
            });
    }

    private waitUntilLoaded(): Observable<boolean> {
       return this._store.select(user.getIsLoading)
          .filter(isLoading => !isLoading);
    }

    private isLoggedIn(): Observable<boolean> {
        return this._store.select(user.getIsLoggedIn);
    }

}
