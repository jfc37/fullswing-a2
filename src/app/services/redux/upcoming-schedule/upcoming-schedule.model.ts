import { ScheduledClassDto } from '../../apis/dtos';

export interface UpcomingScheduleState {
    isLoading: boolean;
    errors: string[];

    upcomingClasses: UpcomingClass[];
}

export interface UpcomingClass {
    name: string;
    startTime: Date;
}

/**
 * Maps schedule dto to state model
 * @param dto
 */
export function mapFromDto(dto: ScheduledClassDto): UpcomingClass {
    return {
        name: dto.name,
        startTime: dto.startTime
    };
}
