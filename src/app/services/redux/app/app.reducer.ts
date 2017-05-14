import { AppState } from './app-state.model';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import { userReducer } from '../user/user.reducer';

const appReducers = {
    user: userReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(appReducers);

export function appReducer(state: any, action: any) {
    return developmentReducer(state, action);
}
