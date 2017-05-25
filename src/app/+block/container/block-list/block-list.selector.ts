import { Block } from '../../../services/redux/blocks/blocks.model';
import * as blocks from '../../../services/redux/blocks/blocks.selectors';
import {
    BlockDisplayModel,
    BlockListDisplayModel
} from '../../components/block-list-display/block-list-display.model';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';

@Injectable()
export class BlockListSelector {
    constructor(private _store: Store<AppState>) { }

    public getBlockListDisplayModel(): Observable<BlockListDisplayModel> {
        const isLoading$ = this._store.select(blocks.getLoading);
        const hasErrored$ = this._store.select(blocks.getHasErrored);
        const blocks$ = this._store.select(blocks.getBlocks);

        const today = moment();

        return Observable.combineLatest(isLoading$, hasErrored$, blocks$)
            .map(([isLoading, hasErrored, blocks]) => ({
                isLoading,
                hasErrored,
                currentBlocks: blocks
                    .filter(block => today.isBetween(block.startDate, block.endDate))
                    .map(block => this.blockToModel(block)),
                futureBlocks: blocks
                    .filter(block => today.isBefore(block.startDate))
                    .map(block => this.blockToModel(block)),
                pastBlocks: blocks
                    .filter(block => today.isAfter(block.endDate))
                    .map(block => this.blockToModel(block)),
            }));
    }

    private blockToModel(block: Block): BlockDisplayModel {
        return {
            id: block.id,
            endDate: block.endDate,
            name: block.name,
            startDate: block.startDate
        };
    }
}
