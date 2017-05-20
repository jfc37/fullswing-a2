import { BlocksForEnrolmentState } from './blocks-for-enrolment.model';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';

export const getBlocksForEnrolmentState = (app: AppState) => app.blocksForEnrolment;

export const getLoading =
    createSelector(getBlocksForEnrolmentState, (state: BlocksForEnrolmentState) => state.isLoading);

export const getHasErrored =
    createSelector(getBlocksForEnrolmentState, (state: BlocksForEnrolmentState) => state.errors.length > 0);

export const getBlocksForEnrolment =
    createSelector(getBlocksForEnrolmentState, (state: BlocksForEnrolmentState) => state.blocks);
