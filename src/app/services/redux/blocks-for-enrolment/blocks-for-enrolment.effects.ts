import { mapFromDtos } from './blocks-for-enrolment.model';
import { BlockRepository, EnrolmentRepository } from '../../apis/repositories';
import * as actions from './blocks-for-enrolment.actions';
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
        .switchMap(() => this._blockRepository.getForEnrolment()
            .map(mapFromDtos)
            .map(blocks => new actions.LoadBlocksForEnrolmentSucceded(blocks))
            .catch(response => response.status === 404
                ? Observable.of(new actions.LoadBlocksForEnrolmentSucceded([])) as Observable<Action>
                : Observable.of(new actions.LoadBlocksForEnrolmentFailed(response)) as Observable<Action>
            )
        );

    @Effect()
    public enrol$: Observable<Action> = this._actions$
        .ofType(blocksForEnrolment.ENROL)
        .map((action: actions.Enrol) => action.id)
        .switchMap(id => this._enrolmentRepository.enrol(id)
            .map(() => new actions.EnrolSucceded(id))
            .catch(() => Observable.of(new actions.EnrolFailed(id)))
        );

    constructor(
        private _actions$: Actions,
        private _blockRepository: BlockRepository,
        private _enrolmentRepository: EnrolmentRepository) {}
}
