import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { getUserState } from './services/redux/user/user.selectors';
import { LoggedOutAction } from './services/redux/user/user.actions';
import { AppState } from './services/redux/app/app.model';
import { UserState } from './services/redux/user/user.model';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'fs-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.css' ],
  template: `
    <nav>
      <a [routerLink]=" ['./dashboard'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Dashboard
      </a>
      <a [routerLink]=" ['./block-enrolment'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Block Enrolment
      </a>
      <a (click)="logout()">
        Log out
      </a>
    </nav>
    
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  public user$: Observable<UserState>;

  constructor(private _store: Store<AppState>
  ) {}

  public ngOnInit() {
    this.user$ = this._store.select(getUserState);
  }

  public logout() {
    this._store.dispatch(new LoggedOutAction());
  }
}
