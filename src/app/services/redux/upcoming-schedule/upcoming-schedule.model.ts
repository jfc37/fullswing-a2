export interface UpcomingScheduleState {
    isLoading: boolean;
    errors: string[];

    upcomingClasses: UpcomingClass[];
}

export interface UpcomingClass {
    name: string;
    startTime: Date;
}
