import { dtosToClasses } from './classes.model';
import { ClassRepository } from '../../apis/repositories/class.repository';
import * as classActions from './classes.actions';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

@Injectable()
export class ClassesEffects {

    @Effect()
    public loadForBlock$: Observable<Action> = this._actions$
        .ofType(classActions.LOAD_FOR_BLOCK)
        .map((action: classActions.LoadClassesForBlock) => action.blockId)
        .switchMap(blockId => this._repository.getForBlock(blockId)
            .map(dtosToClasses)
            .map(classes => new classActions.LoadClassesForBlockSucceded(classes))
            .catch(response => response.status === 404
                   ? Observable.of(new classActions.LoadClassesForBlockSucceded([]))
                   : Observable.of(new classActions.LoadClassesForBlockFailed(response))
            )
        );

    @Effect()
    public loadForBlockSuccess$: Observable<Action> = this._actions$
        .ofType(classActions.LOAD_FOR_BLOCK_SUCCESS)
        .map((action: classActions.LoadClassesForBlockSucceded) => new classActions.AddClasses(action.classes));

    // @Effect()
    // public loadSelected$: Observable<Action> = this._actions$
    //     .ofType(blockActions.LOAD_SELECTED)
    //     .map(action => action.id)
    //     .switchMap(id => this._repository.get(id)
    //         .map(dto => ({
    //             block: dtoToBlock(dto),
    //             teachers: dtosToTeachers(dto.teachers)
    //         }))
    //         .mergeMap(({block, teachers}) => [
    //             new blockActions.LoadSelectedBlockSucceded(block),
    //             new teacherActions.AddTeachers(teachers)
    //         ])
    //         .catch(response => response.status === 404
    //                ? Observable.of(new blockActions.LoadBlocksFailed(new Error(`Could not find selected block`))) as Observable<Action>
    //                : Observable.of(new blockActions.LoadBlocksFailed(response)) as Observable<Action>
    //         )
    //     );

    constructor(
        private _actions$: Actions,
        private _repository: ClassRepository) {}
}
