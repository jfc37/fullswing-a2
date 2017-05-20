import { CurrentPass } from './current-passes.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Current Passes] Load';
export const LOAD_SUCCEDED = '[Current Passes] Load Succeded';
export const LOAD_FAILED = '[Current Passes] Load Failed';

export class LoadCurrentPasses implements Action {
    public readonly type = LOAD;
}

export class LoadCurrentPassesSucceded implements Action {
    public readonly type = LOAD_SUCCEDED;

    constructor(public passes: CurrentPass[]) {}
}

export class LoadCurrentPassesFailed implements Action {
    public readonly type = LOAD_FAILED;

    constructor(public error: Error) {}
}

export type Actions
    = LoadCurrentPasses
    | LoadCurrentPassesSucceded
    | LoadCurrentPassesFailed;
