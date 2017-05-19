import { BlockDisplayModel } from '../block-display/block-display.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fs-block-group',
    template: `
        <h3>Starting {{model.startDate | fsMoment:'dddd, Do of MMMM'}}</h3>
        <div *ngFor="let block of model.blocks">
            <fs-block-display [model]="block"
                              (enrol)="enrol.emit($event)"></fs-block-display>
        </div>
    `
})
export class BlockGroupComponent {
    @Input()
    public model: BlockDisplayModel;

    @Output()
    public enrol = new EventEmitter<number>();
}
