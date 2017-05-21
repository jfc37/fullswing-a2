import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../services/redux/app/app.model';
import { LoadUpcomingSchedule } from '../../../services/redux/upcoming-schedule/upcoming-schedule.actions';
import { LoadCurrentPasses } from '../../../services/redux/current-passes/current-passes.actions';

@Injectable()
export class DashboardDispatcher {
    constructor(private _store: Store<AppState>) {}

    public initialise(): void {
        this._store.dispatch(new LoadUpcomingSchedule());
        this._store.dispatch(new LoadCurrentPasses());
    }
}
