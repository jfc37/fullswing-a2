import * as teacherActions from '../teachers/teachers.actions';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { dtosToTeachers } from '../teachers/teachers.model';
import { TeacherRepository } from '../../apis/repositories/teacher.repository';

@Injectable()
export class TeachersEffects {

    @Effect()
    public load$: Observable<Action> = this._actions$
        .ofType(teacherActions.LOAD)
        .switchMap(() => this._repository.getAll()
            .map(dtosToTeachers)
            .map(teachers => new teacherActions.LoadTeachersSucceded(teachers))
            .catch(response => response.status === 404
                   ? Observable.of(new teacherActions.LoadTeachersSucceded([])) as Observable<Action>
                   : Observable.of(new teacherActions.LoadTeachersFailed(response)) as Observable<Action>
            )
        );

    @Effect()
    public loadSucceded$: Observable<Action> = this._actions$
        .ofType(teacherActions.LOAD_SUCCEDED)
        .map((action: teacherActions.LoadTeachersSucceded) => new teacherActions.AddTeachers(action.teachers));

    constructor(
        private _actions$: Actions,
        private _repository: TeacherRepository) {}
}
