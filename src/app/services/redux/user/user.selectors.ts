import { UserState } from './user-state.model';
import { AppState } from '../app/app-state.model';
import { createSelector } from 'reselect';

export const getUserState = (app: AppState) => app.user;

const getLoading = (user: UserState) => user.isLoading;
const getLoggedIn = (user: UserState) => user.isLoggedIn;

export const getUserLoading = createSelector(getUserState, getLoading);
export const getUserLoggedIn = createSelector(getUserState, getLoggedIn);
