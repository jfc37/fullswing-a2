import { BlockRepository } from '../../apis/repositories/block.repository';
import { dtosToBlocks, dtoToBlock } from './blocks.model';
import * as actions from './blocks.actions';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as blocks from './blocks.actions';

@Injectable()
export class BlocksEffects {

    @Effect()
    public load$: Observable<Action> = this._actions$
        .ofType(blocks.LOAD)
        .switchMap(() => this._repository.getAll()
            .map(dtosToBlocks)
            .map(blocks => new actions.LoadBlocksSucceded(blocks))
            .catch(response => response.status === 404
                   ? Observable.of(new actions.LoadBlocksSucceded([])) as Observable<Action>
                   : Observable.of(new actions.LoadBlocksFailed(response)) as Observable<Action>
            )
        );

    @Effect()
    public loadSelected$: Observable<Action> = this._actions$
        .ofType(blocks.LOAD_SELECTED)
        .map(action => action.id)
        .switchMap(id => this._repository.get(id)
            .map(dtoToBlock)
            .map(block => new actions.LoadSelectedBlockSucceded(block))
            .catch(response => response.status === 404
                   ? Observable.of(new actions.LoadBlocksFailed(new Error(`Could not find selected block`))) as Observable<Action>
                   : Observable.of(new actions.LoadBlocksFailed(response)) as Observable<Action>
            )
        );

    constructor(
        private _actions$: Actions,
        private _repository: BlockRepository) {}
}
