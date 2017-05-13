import * as rootReducer from './services/redux/root/root-reducer';
import { UserState } from './services/redux/user/user-state.model';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AuthenticationService } from './common';
/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./login'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Login
      </a>
      <a [routerLink]=" ['./dashboard'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Dashboard
      </a>
    </nav>

    <button (click)="logout()">Log out</button>    
    
    <pre>{{user$ | async | json}}</pre>
    
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  public user$: Observable<UserState>;

  constructor(
    private _authService: AuthenticationService,
    private _store: Store<UserState>
  ) {}

  public ngOnInit() {
    this.user$ = this._store.select(user => user);
  }

  public logout() {
    this._authService.logout();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
