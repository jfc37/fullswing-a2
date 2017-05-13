import { UserState } from './user-state.model';
import * as user from './user.actions';

export const initialState: UserState = {
    isLoggedIn: false,
    isLoading: true,
    idToken: null,
    errors: []
};

export function userReducer(state = initialState, action: user.Actions): UserState {
    switch (action.type) {
        case user.CHECK_LOGIN_STATUS: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case user.LOGGED_IN: {
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedIn: true,
                idToken: action.payload.idToken
            });
        }

        case user.LOGGED_OUT: {
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedIn: false
            });
        }

        default: {
            return state;
        }
    }
}
