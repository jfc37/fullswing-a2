import { BlockDto } from '../../apis/dtos/block.dto';
export interface BlocksState {
    isLoading: boolean;
    errors: string[];

    blocks: Block[];
}

export interface Block {
    id: number;
    name: string;
    numberOfClasses: number;
    classCapacity: number;
    startDate: Date;
    endDate: Date;
    isInviteOnly: boolean;
    minutesPerClass: number;

    teachers: any[];
    classes: any[];
    enroledStudents: any[];
}

export function dtosToBlocks(dtos: BlockDto[]): Block[] {
    return dtos.map(dto => ({
        id: dto.id,
        name: dto.name,
        numberOfClasses: dto.numberOfClasses,
        classCapacity: dto.classCapacity,
        startDate: dto.startDate,
        endDate: dto.endDate,
        isInviteOnly: dto.isInviteOnly,
        minutesPerClass: dto.minutesPerClass,
        teachers: [],
        classes: [],
        enroledStudents: []
    }));
}
