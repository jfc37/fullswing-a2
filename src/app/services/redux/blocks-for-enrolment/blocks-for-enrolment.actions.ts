import { BlockForEnrolment } from './blocks-for-enrolment.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Blocks For Enrolment] Load';
export const LOAD_SUCCEDED = '[Blocks For Enrolment] Load Succeded';
export const LOAD_FAILED = '[Blocks For Enrolment] Load Failed';

export const ENROL = '[Blocks For Enrolment] Enrol';
export const ENROL_SUCCEDED = '[Blocks For Enrolment] Enrol Succeded';
export const ENROL_FAILED = '[Blocks For Enrolment] Enrol Failed';

export class LoadBlocksForEnrolment implements Action {
    public readonly type = LOAD;
}

export class LoadBlocksForEnrolmentSucceded implements Action {
    public readonly type = LOAD_SUCCEDED;

    constructor(public blocks: BlockForEnrolment[]) {}
}

export class LoadBlocksForEnrolmentFailed implements Action {
    public readonly type = LOAD_FAILED;

    constructor(public error: Error) {}
}

export class Enrol implements Action {
    public readonly type = ENROL;

    constructor(public id: number) {}
}

export class EnrolSucceded implements Action {
    public readonly type = ENROL_SUCCEDED;

    constructor(public id: number) {}
}

export class EnrolFailed implements Action {
    public readonly type = ENROL_FAILED;

    constructor(public id: number) {}
}

export type Actions
    = LoadBlocksForEnrolment
    | LoadBlocksForEnrolmentSucceded
    | LoadBlocksForEnrolmentFailed
    | Enrol
    | EnrolSucceded
    | EnrolFailed;
