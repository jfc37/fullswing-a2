import { PassDto } from '../../apis/dtos';

export interface CurrentPassesState {
    isLoading: boolean;
    errors: string[];

    passes: CurrentPass[];
}

export interface CurrentPass {
    name: string;
    expiryDate: Date;
    remainingClips?: number;
}

export function mapFromDto(dto: PassDto): CurrentPass {
    return {
        name: dto.description,
        remainingClips: dto.clipsRemaining,
        expiryDate: dto.endDate
    };
}
