import { Block } from '../blocks/blocks.model';
import { ClassesState } from './classes.model';
import { getSelectedBlockId } from '../blocks/blocks.selectors';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';

export const getClassesState = (app: AppState) => app.classes;

export const getLoading =
    createSelector(getClassesState, (classes: ClassesState) => classes.isLoading);

export const getHasErrored =
    createSelector(getClassesState, (classes: ClassesState) => classes.errors.length > 0);

export const getClassesForSelectedBlock =
    createSelector(getClassesState, getSelectedBlockId,
        (classes: ClassesState, blockId: number) =>
            classes.classes.filter(c => c.blockId === blockId));
