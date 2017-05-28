import { Class } from './classes.model';
import { Action } from '@ngrx/store';

export const ADD_CLASSES = '[Classes] Add';

export class AddClasses implements Action {
    public readonly type = ADD_CLASSES;

    constructor(public classes: Class[]) {}
}

export type Actions
    = AddClasses;
