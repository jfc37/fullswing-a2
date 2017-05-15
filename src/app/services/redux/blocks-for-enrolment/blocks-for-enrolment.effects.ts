import { BlocksForEnrolmentRepository } from './blocks-for-enrolment.repository';
import { LoadBlocksForEnrolmentFailed, LoadBlocksForEnrolmentSucceded } from './blocks-for-enrolment.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import * as blocksForEnrolment from './blocks-for-enrolment.actions';

@Injectable()
export class BlocksForEnrolmentsEffects {

    @Effect()
    public load$: Observable<Action> = this._actions$
        .ofType(blocksForEnrolment.LOAD)
        .switchMap(() => this._repository.get()
            .map(blocks => new LoadBlocksForEnrolmentSucceded(blocks))
            .catch(response => response.status === 404
                ? Observable.of(new LoadBlocksForEnrolmentSucceded([])) as Observable<Action>
                : Observable.of(new LoadBlocksForEnrolmentFailed(response)) as Observable<Action>
            )
        );

    constructor(
        private _actions$: Actions,
        private _repository: BlocksForEnrolmentRepository) {}
}
