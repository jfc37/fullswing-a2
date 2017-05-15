import { getUserState } from './services/redux/user/user.selectors';
import { LoggedOutAction } from './services/redux/user/user.actions';
import { AppState } from './services/redux/app/app-state.model';
import * as rootReducer from './services/redux/root/root-reducer';
import { UserState } from './services/redux/user/user-state.model';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

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
      <a [routerLink]=" ['./dashboard'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Dashboard
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

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
