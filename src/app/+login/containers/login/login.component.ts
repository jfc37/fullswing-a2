import { LockService } from '../../../common/authentication/lock.service';
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
    constructor(private _lock: LockService) {

    }

    public ngOnInit() {
        this._lock.displayLock();
    }
}
