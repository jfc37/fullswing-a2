import { mapFromDtos } from './blocks-for-enrolment.model';
import { BlockRepository, EnrolmentRepository } from '../../apis/repositories';
import {
    Enrol,
    EnrolFailed,
    EnrolSucceded,
    LoadBlocksForEnrolmentFailed,
    LoadBlocksForEnrolmentSucceded
} from './blocks-for-enrolment.actions';
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
            .map(blocks => new LoadBlocksForEnrolmentSucceded(blocks))
            .catch(response => response.status === 404
                ? Observable.of(new LoadBlocksForEnrolmentSucceded([])) as Observable<Action>
                : Observable.of(new LoadBlocksForEnrolmentFailed(response)) as Observable<Action>
            )
        );

    @Effect()
    public enrol$: Observable<Action> = this._actions$
        .ofType(blocksForEnrolment.ENROL)
        .map((action: Enrol) => action.id)
        .switchMap(id => this._enrolmentRepository.enrol(id)
            .map(() => new EnrolSucceded(id))
            .catch(() => Observable.of(new EnrolFailed(id)))
        );

    constructor(
        private _actions$: Actions,
        private _blockRepository: BlockRepository,
        private _enrolmentRepository: EnrolmentRepository) {}
}
