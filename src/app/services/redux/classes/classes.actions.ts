import { Class } from './classes.model';
import { Action } from '@ngrx/store';

export const LOAD_FOR_BLOCK = '[Classes] Load for block';
export const LOAD_FOR_BLOCK_SUCCESS = '[Classes] Load for block succeeded';
export const LOAD_FOR_BLOCK_FAILED = '[Classes] Load for block failed';

export const ADD_CLASSES = '[Classes] Add';

export class LoadClassesForBlock implements Action {
    public readonly type = LOAD_FOR_BLOCK;

    constructor(public blockId: number) {}
}

export class LoadClassesForBlockSucceded implements Action {
    public readonly type = LOAD_FOR_BLOCK_SUCCESS;

    constructor(public classes: Class[]) {}
}

export class LoadClassesForBlockFailed implements Action {
    public readonly type = LOAD_FOR_BLOCK_FAILED;

    constructor(public error: Error) {}
}

export class AddClasses implements Action {
    public readonly type = ADD_CLASSES;

    constructor(public classes: Class[]) {}
}

export type Actions
    = LoadClassesForBlock
    | LoadClassesForBlockSucceded
    | LoadClassesForBlockFailed
    | AddClasses;
