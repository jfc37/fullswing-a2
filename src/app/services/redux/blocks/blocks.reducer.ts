import { BlocksState } from './blocks.model';
import * as blocks from './blocks.actions';

export const initialState: BlocksState = {
    isLoading: null,
    errors: [],
    saveError: null,
    validation: [],
    blocks: [],
    selectedBlock: null,
    selectedBlockId: null
};

export function blocksReducer(state = initialState, action: blocks.Actions): BlocksState {
    switch (action.type) {
        case blocks.LOAD: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case blocks.LOAD_SELECTED: {
            return Object.assign({}, state, {
                isLoading: true,
                selectedBlockId: action.id
            });
        }

        case blocks.LOAD_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                blocks: action.blocks
            });

        }

        case blocks.LOAD_FAILED:
        case blocks.LOAD_SELECTED_FAILED: {
            return Object.assign({}, state, {
               isLoading: false,
               errors: [
                   action.error
               ]
            });
        }

        case blocks.LOAD_SELECTED_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                selectedBlock: action.block
            });

        }

        case blocks.UPDATE:
        case blocks.CREATE: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case blocks.UPDATE_VALIDATION_ERROR:
        case blocks.CREATE_VALIDATION_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                validation: action.validation
            });
        }

        case blocks.UPDATE_FAILED:
        case blocks.CREATE_FAILED: {
            return Object.assign({}, state, {
                isLoading: false,
                saveError: action.error
            });
        }

        default: {
            return state;
        }
    }
}
