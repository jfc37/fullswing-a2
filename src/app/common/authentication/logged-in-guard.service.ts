import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './';

/**
 * Guard to against users not logged in
 */
@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthenticationService
    ) {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._authService.isAuthenticated()
            .do(isAuthenticated => {
                if (!isAuthenticated) {
                    this._router.navigate(['/login']);
                }
            });
    }

}
