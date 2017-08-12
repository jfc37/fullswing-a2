import { BlockFormModel } from '../../components/block-form/block-form.model';
import * as blocks from '../../../services/redux/blocks/blocks.selectors';
import * as teachers from '../../../services/redux/teachers/teachers.selectors';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewBlockSelector {
    constructor(private _store: Store<AppState>) { }

    public getBlockFormModel(): Observable<BlockFormModel> {
        const blockState$ = this._store.select(blocks.getBlocksState);
        const teachersState$ = this._store.select(teachers.getTeachersState);

        return Observable.combineLatest(blockState$, teachersState$)
            .map(([blockState, teachersState]) => ({
                isLoading: teachersState.isLoading,
                hasErrored: [...blockState.errors, ...teachersState.errors].length > 0,
                hasSaveErrored: !!blockState.saveError,
                validationMessages: blockState.validation.map(v => v.message),
                teachers: teachersState.teachers.map(teacher => ({
                    name: teacher.fullName,
                    id: teacher.id
                }))
            } as BlockFormModel));
    }
}
