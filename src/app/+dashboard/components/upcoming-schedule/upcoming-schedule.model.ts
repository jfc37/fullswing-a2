export interface UpcomingSchduleModel {
    upcomingClasses: UpcomingClassModel[];

    isLoading: boolean;
    hasErrored: boolean;
}

export interface UpcomingClassModel {
    name: string;
    startTime: Date;
}
