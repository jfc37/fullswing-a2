import { CurrentPassesModel } from './current-passes.model';
import { Component, Input } from '@angular/core';

/**
 * Upcoming schedule of classes and events for a student
 */
@Component({
    selector: 'fs-current-passes',
    template: `
        <h3>Current Passes</h3>
        <div *ngIf="isLoading()">
            Loading...
        </div>
        <div *ngIf="!isLoading()">
            <div *ngIf="hasErrored()">
                Problem loading, try again later.
            </div>
            <div *ngIf="!hasErrored()">
                <div *ngIf="hasNotPasses()">
                    You have no valid passes
                </div>
                <div *ngFor="let pass of getPasses()">
                    <span>{{pass.name}}</span>
                    <span *ngIf="pass.remainingClips"> ({{pass.remainingClips}} clips remaining)</span>
                    <span>expires {{pass.expiryDate | date:'MMMM d'}}</span>
                </div>
            </div>
        </div>
    `
})
export class CurrentPassesComponent {
    @Input()
    public model: CurrentPassesModel;

    public isLoading = () => this.model.isLoading;
    public hasErrored = () => this.model.hasErrored;
    public hasNotPasses = () => this.model.passes.length === 0;
    public getPasses = () => this.model.passes;
}
