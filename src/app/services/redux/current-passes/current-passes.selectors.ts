import { CurrentPassesState } from './current-passes-state.model';
import { AppState } from '../app/app-state.model';
import { createSelector } from 'reselect';

export const getCurrentPassesState = (app: AppState) => app.currentPasses;

const getErrors = (currentPasses: CurrentPassesState) => currentPasses.errors.length > 0;

export const getLoading =
    createSelector(getCurrentPassesState, (currentPasses: CurrentPassesState) => currentPasses.isLoading);

export const getHasErrored =
    createSelector(getCurrentPassesState, (currentPasses: CurrentPassesState) => currentPasses.errors.length > 0);

export const getPasses =
    createSelector(getCurrentPassesState, (currentPasses: CurrentPassesState) => currentPasses.passes);
