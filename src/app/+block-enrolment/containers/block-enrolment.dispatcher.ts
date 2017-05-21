import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../services/redux/app/app.model';
import * as actions from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.actions';

@Injectable()
export class BlockEnrolmentDispatcher {
    constructor(private _store: Store<AppState>) {}

    public initialise(): void {
        this._store.dispatch(new actions.LoadBlocksForEnrolment());
    }

    public enrol(id: number): void {
        this._store.dispatch(new actions.Enrol(id));
    }
}
