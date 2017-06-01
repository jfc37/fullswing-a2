import { dtosToClasses } from '../classes/classes.model';
import { BlockRepository } from '../../apis/repositories/block.repository';
import { dtosToBlocks, dtoToBlock, blockToDto } from './blocks.model';
import * as blockActions from './blocks.actions';
import * as teacherActions from '../teachers/teachers.actions';
import * as classActions from '../classes/classes.actions';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { dtosToTeachers } from '../teachers/teachers.model';
import { dtoToValidation } from '../common/validation.model';

@Injectable()
export class BlocksEffects {

    @Effect()
    public load$: Observable<Action> = this._actions$
        .ofType(blockActions.LOAD)
        .switchMap(() => this._repository.getAll()
            .map(dtosToBlocks)
            .map(blocks => new blockActions.LoadBlocksSucceded(blocks))
            .catch(response => response.status === 404
                   ? Observable.of(new blockActions.LoadBlocksSucceded([])) as Observable<Action>
                   : Observable.of(new blockActions.LoadBlocksFailed(response)) as Observable<Action>
            )
        );

    @Effect()
    public loadSelected$: Observable<Action> = this._actions$
        .ofType(blockActions.LOAD_SELECTED)
        .map(action => action.id)
        .switchMap(id => this._repository.get(id)
            .map(dto => ({
                block: dtoToBlock(dto),
                teachers: dtosToTeachers(dto.teachers)
            }))
            .mergeMap(({block, teachers}) => [
                new blockActions.LoadSelectedBlockSucceded(block),
                new teacherActions.AddTeachers(teachers)
            ])
            .catch(response => response.status === 404
                   ? Observable.of(new blockActions.LoadBlocksFailed(new Error(`Could not find selected block`))) as Observable<Action>
                   : Observable.of(new blockActions.LoadBlocksFailed(response)) as Observable<Action>
            )
        );

    @Effect()
    public update$: Observable<Action> = this._actions$
        .ofType(blockActions.UPDATE)
        .map(action => blockToDto(action.block))
        .switchMap(block => this._repository.update(block)
            .map(updatedBlock => new blockActions.LoadSelectedBlock(updatedBlock.id))
            .catch(response => response.status === 400
                ? Observable.of(new blockActions.UpdateBlockValidationError(dtoToValidation(response.json()))) as Observable<Action>
                : Observable.of(new blockActions.UpdateBlockFailed(response)) as Observable<Action>)
        );

    constructor(
        private _actions$: Actions,
        private _repository: BlockRepository) {}
}
