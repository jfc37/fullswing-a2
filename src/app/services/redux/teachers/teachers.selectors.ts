import { getSelectedBlock } from '../blocks/blocks.selectors';
import { TeachersState } from './teachers.model';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';
import { Block } from '../blocks/blocks.model';

export const getTeachersState = (app: AppState) => app.teachers;

export const getTeachersForSelectedBlock =
    createSelector(getTeachersState, getSelectedBlock,
        (teachers: TeachersState, block: Block) =>
            block && block.teachers
            ? teachers.teachers.filter(t => block.teachers.indexOf(t.id) > -1)
            : []);
