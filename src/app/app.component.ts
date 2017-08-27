import { AppState } from './services/redux/app/app.model';
import { getUserState } from './services/redux/user/user.selectors';
import { LoggedOutAction } from './services/redux/user/user.actions';
import { UserState } from './services/redux/user/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
