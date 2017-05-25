export interface BlockListDisplayModel {
    isLoading: boolean;
    hasErrored: boolean;

    currentBlocks: BlockDisplayModel[];
    futureBlocks: BlockDisplayModel[];
    pastBlocks: BlockDisplayModel[];
}

export interface BlockDisplayModel {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
}
