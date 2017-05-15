import { BlockForEnrolment } from './blocks-for-enrolment.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Blocks For Enrolment] Load';
export const LOAD_SUCCEDED = '[Blocks For Enrolment] Load Succeded';
export const LOAD_FAILED = '[Blocks For Enrolment] Load Failed';

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

export type Actions
    = LoadBlocksForEnrolment
    | LoadBlocksForEnrolmentSucceded
    | LoadBlocksForEnrolmentFailed;
