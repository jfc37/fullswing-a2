import { UserState } from './user-state.model';
import * as user from './user.actions';

export const initialState: UserState = {
    isLoggedIn: false,
    isLoading: false,
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

        default: {
            return state;
        }
    }
}
