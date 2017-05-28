import { Block } from '../blocks/blocks.model';
import { ClassesState } from './classes.model';
import { getSelectedBlock } from '../blocks/blocks.selectors';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';

export const getClassesState = (app: AppState) => app.classes;

export const getClassesForSelectedBlock =
    createSelector(getClassesState, getSelectedBlock,
        (classes: ClassesState, block: Block) =>
            block && block.classes
            ? classes.classes.filter(t => block.classes.indexOf(t.id) > -1)
            : []);
