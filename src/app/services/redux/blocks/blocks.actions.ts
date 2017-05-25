import { Block } from './blocks.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Blocks] Load';
export const LOAD_SUCCEDED = '[Blocks] Load Succeded';
export const LOAD_FAILED = '[Blocks] Load Failed';

export class LoadBlocks implements Action {
    public readonly type = LOAD;
}

export class LoadBlocksSucceded implements Action {
    public readonly type = LOAD_SUCCEDED;

    constructor(public blocks: Block[]) {}
}

export class LoadBlocksFailed implements Action {
    public readonly type = LOAD_FAILED;

    constructor(public error: Error) {}
}

export type Actions
    = LoadBlocks
    | LoadBlocksSucceded
    | LoadBlocksFailed;
