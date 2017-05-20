import { UpcomingSchduleModel } from './upcoming-schedule.model';
import { Component, OnInit, Input } from '@angular/core';

/**
 * Upcoming schedule of classes and events for a student
 */
@Component({
    selector: 'fs-upcoming-schedule',
    template: `
        <h3>Upcoming Schedule</h3>
        <div *ngIf="isLoading()"
            class="loading">
            Loading...
        </div>
        <div *ngIf="!isLoading()">
            <div *ngIf="hasErrored()"
                class="error">
                Problem loading, try again later.
            </div>
            <div *ngIf="!hasErrored()">
                <div *ngIf="hasNothingScheduled()"
                    class="nothing-scheduled">
                    Nothing scheduled for this week
                </div>
                <div *ngFor="let class of getUpcomingClasses()"
                    class="upcoming-class">
                    {{class.name}} | {{class.startTime | date:'EEEE hh:mm'}}
                </div>
            </div>
        </div>
    `
})
export class UpcomingScheduleComponent {
    @Input()
    public model: UpcomingSchduleModel;

    public isLoading = () => this.model.isLoading;
    public hasErrored = () => this.model.hasErrored;
    public hasNothingScheduled = () => this.model.upcomingClasses.length === 0;
    public getUpcomingClasses = () => this.model.upcomingClasses;
}
