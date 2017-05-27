import { BlocksState } from './blocks.model';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';

export const getBlocksState = (app: AppState) => app.blocks;

const getErrors = (blocks: BlocksState) => blocks.errors.length > 0;

export const getLoading =
    createSelector(getBlocksState, (blocks: BlocksState) => blocks.isLoading);

export const getHasErrored =
    createSelector(getBlocksState, (blocks: BlocksState) => blocks.errors.length > 0);

export const getBlocks =
    createSelector(getBlocksState, (blocks: BlocksState) => blocks.blocks);

export const getSelectedBlock =
    createSelector(getBlocksState, (blocks: BlocksState) => blocks.selectedBlock);
