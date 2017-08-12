export interface BlockSummaryModel {
    name: string;
    startDate: Date;
    endDate: Date;
    inviteOnly: boolean;
    teachers: string[];
    numberOfStudentsRegistered: number;

    isLoading: boolean;
    hasErrored: boolean;
}
