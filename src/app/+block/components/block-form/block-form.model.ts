export interface BlockFormModel {
    block: BlockModel;
    isLoading: boolean;
    hasErrored: boolean;
    hasSaveErrored: boolean;
}

export interface BlockModel {
    name: string;
    startDate: Date;
    endDate: Date;
    minutesPerClass: number;
    classCapacity: number;
    numberOfClasses: number;
    teachers: number[];
    isInviteOnly: boolean;
}
