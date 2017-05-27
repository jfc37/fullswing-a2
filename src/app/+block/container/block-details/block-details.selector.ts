import * as blocks from '../../../services/redux/blocks/blocks.selectors';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlockDetailsSelector {
    constructor(private _store: Store<AppState>) { }

    public getModel(): Observable<any> {
        const isLoading$ = this._store.select(blocks.getLoading);
        const hasErrored$ = this._store.select(blocks.getHasErrored);
        const selectedBlock$ = this._store.select(blocks.getSelectedBlock);

        return Observable.combineLatest(isLoading$, hasErrored$, selectedBlock$)
            .map(([isLoading, hasErrored, selectedBlock]) => ({
                isLoading,
                hasErrored,
                selectedBlock
            }));
    }
}
