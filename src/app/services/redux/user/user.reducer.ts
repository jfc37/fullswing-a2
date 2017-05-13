import { UserState } from './user-state.model';
import * as user from './user.actions';

export const initialState: UserState = {
    isLoggedIn: false,
    isLoading: true,
    errors: []
};

export function userReducer(state = initialState, action: user.Actions): UserState {
    switch (action.type) {
        case user.LOGIN: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case user.LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedIn: true
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
