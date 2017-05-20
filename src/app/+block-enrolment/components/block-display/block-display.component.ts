import { BlockDisplayModel } from './block-display.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'fs-block-display',
    template: `
        <h4>{{model.name}}</h4>
        <div>
            {{model.startTime | date:'shortTime'}} - {{model.endTime | date:'shortTime'}}
        </div>
        <div>
            <button *ngIf="canEnrol()"
                    (click)="enrolClick()">
                Enrol
            </button>
            <span *ngIf="model.isLoading">
                Loading...
            </span>
            <span *ngIf="model.hasErrored">
                Oops, something's gone wrong
            </span>
            <span *ngIf="model.isEnroled">
                Enrolled
            </span>
        </div>
    `
})
export class BlockDisplayComponent {
    @Input()
    public model: BlockDisplayModel;

    @Output()
    public enrol = new EventEmitter<number>();

    public enrolClick() {
        this.enrol.emit(this.model.id);
    }

    public canEnrol = () =>
        !this.model.isEnroled
        && !this.model.isLoading
        && !this.model.hasErrored;
}
