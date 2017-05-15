import { LoadCurrentPasses } from '../../../services/redux/current-passes/current-passes.actions';
import { CurrentPassesModel } from '../../components/current-passes/current-passes.model';
import * as upcomingSchedule from '../../../services/redux/upcoming-schedule/upcoming-schedule.selectors';
import * as currentPasses from '../../../services/redux/current-passes/current-passes.selectors';
import { Observable } from 'rxjs/Rx';
import { LoadUpcomingSchedule } from '../../../services/redux/upcoming-schedule/upcoming-schedule.actions';
import { AppState } from '../../../services/redux/app/app-state.model';
import { Store } from '@ngrx/store';
import { UpcomingSchduleModel } from '../../components/upcoming-schedule/upcoming-schedule.model';
import { Component, OnInit } from '@angular/core';

/**
 * Dashboard for all users
 * Will hold all the dashboard widgets
 */
@Component({
    selector: 'fs-dashboard',
    template: `
        <h2>DASHBOARD</h2>
        <fs-upcoming-schedule [model]="upcomingScheduleModel$ | async"></fs-upcoming-schedule>
        <fs-current-passes [model]="currentPassesModel$ | async"></fs-current-passes>
    `
})
export class DashboardComponent implements OnInit {
    public upcomingScheduleModel$: Observable<UpcomingSchduleModel>;
    public currentPassesModel$: Observable<CurrentPassesModel>;

    constructor(private _store: Store<AppState>) {}

    public ngOnInit() {
        this._store.dispatch(new LoadUpcomingSchedule());
        this._store.dispatch(new LoadCurrentPasses());

        this.upcomingScheduleModel$ = this.getUpcomingSchedule();
        this.currentPassesModel$ = this.getCurrentPasses();
    }

    private getUpcomingSchedule(): Observable<UpcomingSchduleModel> {
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

    private getCurrentPasses(): Observable<CurrentPassesModel> {
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
