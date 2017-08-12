import { BlockEnrolmentDispatcher } from './block-enrolment.dispatcher';
import { BlockGroupModel } from '../components/block-group/block-group.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BlockEnrolmentSelector } from './block-enrolment.selector';

/**
 * Block enrolment for users
 */
@Component({
    selector: 'fs-block-enrolment',
    template: `
        <h2>Block Enrolment</h2>
        <div *ngFor="let block of blocks$ | async">
            <fs-block-group [model]="block"
                            (enrol)="enrolInBlock($event)"></fs-block-group>
        </div>
    `,
    providers: [
        BlockEnrolmentDispatcher,
        BlockEnrolmentSelector
    ]
})
export class BlockEnrolmentComponent implements OnInit {
    public blocks$: Observable<BlockGroupModel[]>;

    constructor(
        private _dispatcher: BlockEnrolmentDispatcher,
        private _selector: BlockEnrolmentSelector
    ) {}

    public ngOnInit() {
        this._dispatcher.initialise();
        this.blocks$ = this._selector.getBlockGroups();
    }

    public enrolInBlock(blockId) {
        this._dispatcher.enrol(blockId);
    }
}
