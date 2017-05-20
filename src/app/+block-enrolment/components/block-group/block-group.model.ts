import { BlockDisplayModel } from '../block-display/block-display.model';

export interface BlockGroupModel {
    startDate: Date;
    blocks: BlockDisplayModel[];
}
