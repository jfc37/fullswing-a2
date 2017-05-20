import { ScheduleDto } from '../../apis/dtos';

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
export function mapFromDto(dto: ScheduleDto): UpcomingClass {
    return {
        name: dto.name,
        startTime: dto.startTime
    };
}
