import { BlockForEnrolment, BlocksForEnrolmentState } from './blocks-for-enrolment.model';
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

        case blocksForEnrolment.ENROL: {
            const updatedBlock = Object.assign({}, getBlock(state, action.id), {
                isLoading: true
            });
            return Object.assign({}, state, {
                blocks: cloneWithUpdatedBlock(state, updatedBlock)
            });
        }

        case blocksForEnrolment.ENROL_SUCCEDED: {
            const updatedBlock = Object.assign({}, getBlock(state, action.id), {
                isEnroled: true,
                isLoading: false
            });
            return Object.assign({}, state, {
                blocks: cloneWithUpdatedBlock(state, updatedBlock)
            });
        }

        case blocksForEnrolment.ENROL_FAILED: {
            const updatedBlock = Object.assign({}, getBlock(state, action.id), {
                isLoading: false,
                hasErrored: true
            });
            return Object.assign({}, state, {
                blocks: cloneWithUpdatedBlock(state, updatedBlock)
            });
        }

        default: {
            return state;
        }
    }
}

function getBlock(state: BlocksForEnrolmentState, id: number) {
    const blockIndex = state.blocks
        .map(block => block.id)
        .indexOf(id);

    return state.blocks[blockIndex];
}

function cloneWithUpdatedBlock(state: BlocksForEnrolmentState, updatedBlock: BlockForEnrolment) {
    const updatedBlockIndex = state.blocks
        .map(block => block.id)
        .indexOf(updatedBlock.id);

    const updatedBlocks = [...state.blocks];
    updatedBlocks[updatedBlockIndex] = updatedBlock;

    return updatedBlocks;
}
