import { Validation } from '../common/validation.model';
import { Block } from './blocks.model';
import { Action } from '@ngrx/store';

export const LOAD = '[Blocks] Load';
export const LOAD_SUCCEDED = '[Blocks] Load Succeded';
export const LOAD_FAILED = '[Blocks] Load Failed';

export const LOAD_SELECTED = '[Blocks] Load Selected';
export const LOAD_SELECTED_SUCCEDED = '[Blocks] Load Selected Succeded';
export const LOAD_SELECTED_FAILED = '[Blocks] Load Selected Failed';

export const UPDATE = '[Blocks] Update';
export const UPDATE_SUCCEDED = '[Blocks] Update Succeded';
export const UPDATE_VALIDATION_ERROR = '[Blocks] Update Validation Error';
export const UPDATE_FAILED = '[Blocks] Update Failed';

export const CREATE = '[Blocks] Create';
export const CREATE_SUCCEDED = '[Blocks] Create Succeded';
export const CREATE_VALIDATION_ERROR = '[Blocks] Create Validation Error';
export const CREATE_FAILED = '[Blocks] Create Failed';

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

export class UpdateBlock implements Action {
    public readonly type = UPDATE;

    constructor(public block: Block) {}
}

export class UpdateBlockSucceded implements Action {
    public readonly type = UPDATE_SUCCEDED;

    constructor(public id: number) {}
}

export class UpdateBlockValidationError implements Action {
    public readonly type = UPDATE_VALIDATION_ERROR;

    constructor(public validation: Validation[]) {}
}

export class UpdateBlockFailed implements Action {
    public readonly type = UPDATE_FAILED;

    constructor(public error: Error) {}
}

export class CreateBlock implements Action {
    public readonly type = CREATE;

    constructor(public block: Block) {}
}

export class CreateBlockSucceded implements Action {
    public readonly type = CREATE_SUCCEDED;

    constructor(public id: number) {}
}

export class CreateBlockValidationError implements Action {
    public readonly type = CREATE_VALIDATION_ERROR;

    constructor(public validation: Validation[]) {}
}

export class CreateBlockFailed implements Action {
    public readonly type = CREATE_FAILED;

    constructor(public error: Error) {}
}

export type Actions
    = LoadBlocks
    | LoadBlocksSucceded
    | LoadBlocksFailed

    | LoadSelectedBlock
    | LoadSelectedBlockSucceded
    | LoadSelectedBlockFailed

    | UpdateBlock
    | UpdateBlockSucceded
    | UpdateBlockValidationError
    | UpdateBlockFailed

    | CreateBlock
    | CreateBlockSucceded
    | CreateBlockValidationError
    | CreateBlockFailed;
