import { Action } from '@ngrx/store';
import { Teacher } from './teachers.model';

export const ADD_TEACHERS = '[Teachers] Add';

export class AddTeachers implements Action {
    public readonly type = ADD_TEACHERS;

    constructor(public teachers: Teacher[]) {}
}

export type Actions
    = AddTeachers;
