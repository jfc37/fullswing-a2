import { BlocksForEnrolmentState } from './blocks-for-enrolment.model';
import * as blocksForEnrolment from './blocks-for-enrolment.actions';

export const initialState: BlocksForEnrolmentState = {
    isLoading: null,
    errors: [],
    blocks: []
};

export function blocksForEnrolmentReducer(state = initialState, action: blocksForEnrolment.Actions): BlocksForEnrolmentState {
    switch (action.type) {
        case blocksForEnrolment.LOAD: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case blocksForEnrolment.LOAD_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                blocks: action.blocks
            });

        }

        case blocksForEnrolment.LOAD_FAILED: {
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
