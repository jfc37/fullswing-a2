import { LoadCurrentPassesFailed, LoadCurrentPassesSucceded } from './current-passes.actions';
import { CurrentPassesRepository } from './current-passes.repository';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as currentPasses from './current-passes.actions';

@Injectable()
export class CurrentPassesEffects {

    @Effect()
    public load$: Observable<Action> = this._actions$
        .ofType(currentPasses.LOAD)
        .switchMap(() => this._repository.get()
            .map(passes => new LoadCurrentPassesSucceded(passes))
            .catch(response => response.status === 404
                   ? Observable.of(new LoadCurrentPassesSucceded([])) as Observable<Action>
                   : Observable.of(new LoadCurrentPassesFailed(response)) as Observable<Action>
            )
        );

    constructor(
        private _actions$: Actions,
        private _repository: CurrentPassesRepository) {}
}
