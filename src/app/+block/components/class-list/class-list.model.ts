export interface ClassListModel {
    isLoading: boolean;
    hasErrored: boolean;

    classes: ClassSummaryModel[];
}

export interface ClassSummaryModel {
    id: number;
    name: string;
    attendance: number;
    date: Date;
}

