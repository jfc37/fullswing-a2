import { UserState } from './user-state.model';
import { AppState } from '../app/app-state.model';
import { createSelector } from 'reselect';

export const getUserState = (app: AppState) => app.user;

export const getIsLoading = createSelector(getUserState, (user: UserState) => user.isLoading);
export const getIsLoggedIn = createSelector(getUserState, (user: UserState) => user.isLoggedIn);
