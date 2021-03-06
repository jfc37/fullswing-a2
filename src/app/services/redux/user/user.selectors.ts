import { UserState } from './user.model';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';

export const getUserState = (app: AppState) => app.user;

export const getIsLoading = createSelector(getUserState, (user: UserState) => user.isLoading);
export const getIsLoggedIn = createSelector(getUserState, (user: UserState) => user.isLoggedIn);
