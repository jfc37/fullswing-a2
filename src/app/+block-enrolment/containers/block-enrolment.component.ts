import { BlockGroupModel } from '../components/block-group/block-group.model';
import { BlockDisplayModel } from '../components/block-display/block-display.model';
import { Enrol, LoadBlocksForEnrolment } from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.actions';
import {
    getBlocksForEnrolment,
    getBlocksForEnrolmentState
} from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.selectors';
import { AppState } from '../../services/redux/app/app.model';
import { Store } from '@ngrx/store';
import { BlocksForEnrolmentState } from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.model';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';

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
    `
})
export class BlockEnrolmentComponent implements OnInit {
    public state$: Observable<BlocksForEnrolmentState>;
    public blocks$: Observable<BlockGroupModel[]>;

    constructor(private _store: Store<AppState>) {}

    public ngOnInit() {
        this._store.dispatch(new LoadBlocksForEnrolment());

        this.state$ = this._store.select(getBlocksForEnrolmentState);
        this.blocks$ = this._store.select(getBlocksForEnrolment)
            .map(blocks => blocks.map(block => ({
                id: block.id,
                name: block.name,
                startTime: block.startDate,
                endTime: moment(block.startDate).add(block.minutesPerClass, 'minutes').toDate(),
                isEnroled: block.isEnroled,
                isLoading: block.isLoading,
                hasErrored: block.hasErrored
            } as BlockDisplayModel)))
            .map(blocks => blocks.map(block => ({
                startDate: block.startTime,
                blocks: [block]
            } as BlockGroupModel))
                .sort((blockOne, blockTwo) => blockOne.startDate < blockTwo.startDate ? -1 : 1)
            );
    }

    public enrolInBlock(blockId) {
        this._store.dispatch(new Enrol(blockId));
    }
}
