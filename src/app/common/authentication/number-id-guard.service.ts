import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * Guard against id in url that isn't a number
 */
@Injectable()
export class NumberIdGuard implements CanActivate {

    constructor(private _router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        return !isNaN(route.params.id);
    }
}
