import { DashboardSelector } from './dashboard.selector';
import { DashboardDispatcher } from './dashboard.dispatcher';
import { LoadCurrentPasses } from '../../../services/redux/current-passes/current-passes.actions';
import { CurrentPassesModel } from '../../components/current-passes/current-passes.model';
import * as upcomingSchedule from '../../../services/redux/upcoming-schedule/upcoming-schedule.selectors';
import * as currentPasses from '../../../services/redux/current-passes/current-passes.selectors';
import { Observable } from 'rxjs/Rx';
import { LoadUpcomingSchedule } from '../../../services/redux/upcoming-schedule/upcoming-schedule.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { Store } from '@ngrx/store';
import { UpcomingScheduleModel } from '../../components/upcoming-schedule/upcoming-schedule.model';
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
    `,
    providers: [
        DashboardDispatcher,
        DashboardSelector
    ]
})
export class DashboardComponent implements OnInit {
    public upcomingScheduleModel$: Observable<UpcomingScheduleModel>;
    public currentPassesModel$: Observable<CurrentPassesModel>;

    constructor(
        private _dispatcher: DashboardDispatcher,
        private _selector: DashboardSelector) {}

    public ngOnInit() {
        this._dispatcher.initialise();

        this.upcomingScheduleModel$ = this._selector.getUpcomingSchedule();
        this.currentPassesModel$ = this._selector.getCurrentPasses();
    }
}
