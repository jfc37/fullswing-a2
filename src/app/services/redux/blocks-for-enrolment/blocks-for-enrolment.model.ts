export interface BlocksForEnrolmentState {
    isLoading: boolean;
    errors: string[];

    blocks: BlockForEnrolment[];
}

export interface BlockForEnrolment {
    id: number;
    name: string;
    startDate: Date;
    minutesPerClass: number;
    spacesAvailable: number;
    isAlreadyRegistered: boolean;
}
