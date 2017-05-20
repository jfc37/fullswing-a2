import { mapFromDto } from './upcoming-schedule.model';
import { ScheduleRepository } from '../../apis/repositories/schedule.repository';
import { LoadUpcomingScheduleFailed, LoadUpcomingScheduleSucceded } from './upcoming-schedule.actions';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as upcomingSchedule from './upcoming-schedule.actions';

@Injectable()
export class UpcomingScheduleEffects {

    @Effect()
    public load$: Observable<Action> = this._actions$
        .ofType(upcomingSchedule.LOAD)
        .switchMap(() => this._repository.get()
            .map(dtos => dtos.map(mapFromDto))
            .map(classes => new LoadUpcomingScheduleSucceded(classes))
            .catch(response => response.status === 404
                   ? Observable.of(new LoadUpcomingScheduleSucceded([])) as Observable<Action>
                   : Observable.of(new LoadUpcomingScheduleFailed(response)) as Observable<Action>
            )
        );

    constructor(
        private _actions$: Actions,
        private _repository: ScheduleRepository) {}
}
