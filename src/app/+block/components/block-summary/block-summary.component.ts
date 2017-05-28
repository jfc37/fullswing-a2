import { BlockSummaryModel } from './block-summary.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'fs-block-summary',
    template: `
        <h4>BLOCK SUMMARY</h4>
        <div *ngIf="model.isLoading">Loading...</div>
        <div *ngIf="model.hasErrored">Oops, blocks failed to load</div>
        <dl *ngIf="shouldDisplay()">
            <dt>Name</dt>
            <dd>{{model.name}}</dd>
            
            <dt>Time</dt>
            <dd>{{model.startDate | fsMoment:'h:mm a'}}</dd>
            
            <dt>Start date</dt>
            <dd>{{model.startDate | fsMoment:'DD MMM'}}</dd>
            
            <dt>End date</dt>
            <dd>{{model.endDate | fsMoment:'DD MMM'}}</dd>
            
            <dt>Invite only</dt>
            <dd>{{model.inviteOnly | fsYesNo}}</dd>

            <dt>Teachers</dt>
            <dd>{{model.teachers}}</dd>

            <dt>Students registered</dt>
            <dd>{{model.numberOfStudentsRegistered}}</dd>
        </dl>
    `
})
export class BlockSummaryComponent {
    @Input() public model: BlockSummaryModel;

    public shouldDisplay() {
        return !this.model.isLoading && !this.model.hasErrored;
    }
}
