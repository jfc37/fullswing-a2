import { BlockSummaryModel } from '../../components/block-summary/block-summary.model';
import * as blocks from '../../../services/redux/blocks/blocks.selectors';
import * as teachers from '../../../services/redux/teachers/teachers.selectors';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlockDetailsSelector {
    constructor(private _store: Store<AppState>) { }

    public getSummaryModel(): Observable<BlockSummaryModel> {
        const isLoading$ = this._store.select(blocks.getLoading);
        const hasErrored$ = this._store.select(blocks.getHasErrored);
        const selectedBlock$ = this._store.select(blocks.getSelectedBlock);
        const teachers$ = this._store.select(teachers.getTeachersForSelectedBlock);

        return Observable.combineLatest(isLoading$, hasErrored$, selectedBlock$, teachers$)
            .map(([isLoading, hasErrored, selectedBlock, teachers]) => (selectedBlock
            ? {
                isLoading,
                hasErrored,
                name: selectedBlock.name,
                startDate: selectedBlock.startDate,
                endDate: selectedBlock.endDate,
                inviteOnly: selectedBlock.isInviteOnly,
                teachers: teachers.map(t => t.fullName),
                numberOfStudentsRegistered: selectedBlock.enroledStudents.length
            }
            : {
                isLoading,
                hasErrored
            }));
    }

    public getTitle() {
        return this._store.select(blocks.getSelectedBlock)
            .filter(block => !!block)
            .map(block => block.name);
    }
}
