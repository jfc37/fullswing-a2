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

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.isAuthenticated()) {
            return true;
        }

        this._router.navigate(['/login']);
        return false;
    }

}
