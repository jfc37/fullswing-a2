import { LoadBlocks } from '../../../services/redux/blocks/blocks.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class BlockListDispatcher {

    constructor(private _store: Store<AppState>) { }

    public initialise(): void {
        this._store.dispatch(new LoadBlocks());
    }
}
