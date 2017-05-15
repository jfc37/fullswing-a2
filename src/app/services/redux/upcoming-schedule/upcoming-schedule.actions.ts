import { UpcomingClass } from './upcoming-schedule-state.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Upcoming Schedule] Load';
export const LOAD_SUCCEDED = '[Upcoming Schedule] Load Succeded';
export const LOAD_FAILED = '[Upcoming Schedule] Load Failed';

export class LoadUpcomingSchedule implements Action {
    public readonly type = LOAD;
}

export class LoadUpcomingScheduleSucceded implements Action {
    public readonly type = LOAD_SUCCEDED;

    constructor(public classes: UpcomingClass[]) {}
}

export class LoadUpcomingScheduleFailed implements Action {
    public readonly type = LOAD_FAILED;

    constructor(public error: Error) {}
}

export type Actions
    = LoadUpcomingSchedule
    | LoadUpcomingScheduleSucceded
    | LoadUpcomingScheduleFailed;
