import { LoadBlocksForEnrolmentSucceded } from './blocks-for-enrolment.actions';
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
        .delay(3000)
        .map(() => new LoadBlocksForEnrolmentSucceded([]));

    constructor(private _actions$: Actions) {}
}
