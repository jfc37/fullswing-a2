import { AppState } from '../../../services/redux/app/app.model';
import * as upcomingSchedule from '../../../services/redux/upcoming-schedule/upcoming-schedule.selectors';
import * as currentPasses from '../../../services/redux/current-passes/current-passes.selectors';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { UpcomingScheduleModel } from '../../components/upcoming-schedule';
import { CurrentPassesModel } from '../../components/current-passes';

@Injectable()
export class DashboardSelector {
    constructor(private _store: Store<AppState>) {}

    public getUpcomingSchedule(): Observable<UpcomingScheduleModel> {
        return Observable.combineLatest(
                this._store.select(upcomingSchedule.getLoading),
                this._store.select(upcomingSchedule.getHasErrored),
                this._store.select(upcomingSchedule.getUpcomingClasses))
            .map(([isLoading, hasErrored, classes]) => ({
                isLoading,
                hasErrored,    
                upcomingClasses: classes.map(c => ({
                    name: c.name,
                    startTime: c.startTime
                }))
            }));
    }

    public getCurrentPasses(): Observable<CurrentPassesModel> {
        return Observable.combineLatest(
                this._store.select(currentPasses.getLoading),
                this._store.select(currentPasses.getHasErrored),
                this._store.select(currentPasses.getPasses))
            .map(([isLoading, hasErrored, passes]) => ({
                isLoading,
                hasErrored,
                passes: passes.map(c => ({
                    name: c.name,
                    expiryDate: c.expiryDate,
                    remainingClips: c.remainingClips
                }))
            }));
    }
}
