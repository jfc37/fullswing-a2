import { AuthenticationService } from '../../../common';
import { Component, OnInit } from '@angular/core';

/**
 * Login container
 */
@Component({
    selector: 'fs-login',
    template: `
        <h2>Login</h2>
        <fs-login-form></fs-login-form>
    `
})
export class LoginComponent implements OnInit {
    constructor(private _authService: AuthenticationService) {

    }

    public ngOnInit() {
        this._authService.login();
    }
}
