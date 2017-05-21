import { BlockGroupModel } from '../components/block-group/block-group.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';

import { AppState } from '../../services/redux/app/app.model';
import { getBlocksForEnrolment } from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.selectors';
import { BlockDisplayModel } from '../components/block-display/block-display.model';

@Injectable()
export class BlockEnrolmentSelector {
    constructor(private _store: Store<AppState>) {}

    public getBlockGroups(): Observable<BlockGroupModel[]> {
        return this._store.select(getBlocksForEnrolment)
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
}
