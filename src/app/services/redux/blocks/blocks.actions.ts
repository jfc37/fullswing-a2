import { Block } from './blocks.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Blocks] Load';
export const LOAD_SUCCEDED = '[Blocks] Load Succeded';
export const LOAD_FAILED = '[Blocks] Load Failed';

export const LOAD_SELECTED = '[Blocks] Load Selected';
export const LOAD_SELECTED_SUCCEDED = '[Blocks] Load Selected Succeded';
export const LOAD_SELECTED_FAILED = '[Blocks] Load Selected Failed';

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

export class LoadSelectedBlock implements Action {
    public readonly type = LOAD_SELECTED;

    constructor(public id: number) {}
}

export class LoadSelectedBlockSucceded implements Action {
    public readonly type = LOAD_SELECTED_SUCCEDED;

    constructor(public block: Block) {}
}

export class LoadSelectedBlockFailed implements Action {
    public readonly type = LOAD_SELECTED_FAILED;

    constructor(public error: Error) {}
}

export type Actions
    = LoadBlocks
    | LoadBlocksSucceded
    | LoadBlocksFailed
    | LoadSelectedBlock
    | LoadSelectedBlockSucceded
    | LoadSelectedBlockFailed;
