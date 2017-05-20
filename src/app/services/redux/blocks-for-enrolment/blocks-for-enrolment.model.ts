import { BlockDto } from '../../apis/dtos';

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
    isEnroled: boolean;

    isLoading: boolean;
    hasErrored: boolean;
}

export function mapFromDtos(dtos: BlockDto[]): BlockForEnrolment[] {
    return dtos.map(mapFromDto);
}

function mapFromDto(dto: BlockDto): BlockForEnrolment {
    return {
        id: dto.id,
        isEnroled: dto.isAlreadyRegistered,
        minutesPerClass: dto.minutesPerClass,
        name: dto.name,
        spacesAvailable: dto.spacesAvailable,
        startDate: dto.startDate
    } as BlockForEnrolment;
}
