export interface BlockFormModel {
    block: BlockModel;
    teachers: TeacherOption[];
    isLoading: boolean;
    hasErrored: boolean;
    hasSaveErrored: boolean;
    validationMessages: string[];
}

export interface BlockModel {
    name: string;
    startDate: Date;
    endDate: Date;
    minutesPerClass: number;
    classCapacity: number;
    numberOfClasses: number;
    teacher: number;
    isInviteOnly: boolean;
}

export interface TeacherOption {
    name: string;
    id: number;
}
