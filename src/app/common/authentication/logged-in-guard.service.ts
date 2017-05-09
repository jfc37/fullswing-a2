import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * Guard to against users not logged in
 */
@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private _router: Router) {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this._router.navigate(['/login']);
        return false;
    }

}
