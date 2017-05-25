import { BlocksState } from './blocks.model';
import * as blocks from './blocks.actions';

export const initialState: BlocksState = {
    isLoading: null,
    errors: [],
    blocks: []
};

export function blocksReducer(state = initialState, action: blocks.Actions): BlocksState {
    switch (action.type) {
        case blocks.LOAD: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case blocks.LOAD_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                blocks: action.blocks
            });

        }

        case blocks.LOAD_FAILED: {
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
