import { CurrentPassesState } from './current-passes-state.model';
import * as currentPasses from './current-passes.actions';

export const initialState: CurrentPassesState = {
    isLoading: null,
    errors: [],
    passes: []
};

export function currentPassesReducer(state = initialState, action: currentPasses.Actions): CurrentPassesState {
    switch (action.type) {
        case currentPasses.LOAD: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case currentPasses.LOAD_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                passes: action.passes
            });

        }

        case currentPasses.LOAD_FAILED: {
            return Object.assign({}, state, {
               isLoading: false,
               errors: [
                   action.error
               ]
            });
        }

        default: {
            return state;
        }
    }
}
