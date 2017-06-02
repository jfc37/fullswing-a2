import { Action } from '@ngrx/store';
import { Teacher } from './teachers.model';

export const LOAD = '[Teachers] Load';
export const LOAD_SUCCEDED = '[Teachers] Load Succeeded';
export const LOAD_FAILED = '[Teachers] Load Failed';

export const ADD_TEACHERS = '[Teachers] Add';

export class LoadTeachers implements Action {
    public readonly type = LOAD;
}

export class LoadTeachersSucceded implements Action {
    public readonly type = LOAD_SUCCEDED;

    constructor(public teachers: Teacher[]) {}
}

export class LoadTeachersFailed implements Action {
    public readonly type = LOAD_FAILED;

    constructor(public error: Error) {}
}

export class AddTeachers implements Action {
    public readonly type = ADD_TEACHERS;

    constructor(public teachers: Teacher[]) {}
}

export type Actions
    = AddTeachers
    | LoadTeachers
    | LoadTeachersSucceded
    | LoadTeachersFailed;
