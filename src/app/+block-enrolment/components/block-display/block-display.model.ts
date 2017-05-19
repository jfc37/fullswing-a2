export interface BlockDisplayModel {
    id: number;
    name: string;
    startTime: Date;
    endTime: Date;
    isEnroled: boolean;
    isLoading: boolean;
    hasErrored: boolean;
}
