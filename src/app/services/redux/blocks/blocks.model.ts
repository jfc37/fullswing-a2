import { BlockDto } from '../../apis/dtos/block.dto';
import { toIdArray } from '../../../common/util/array.util';
import { TeacherDto } from '../../apis/dtos';

export interface BlocksState {
    isLoading: boolean;
    errors: string[];
    saveError: string;

    blocks: Block[];

    selectedBlock: Block;
    selectedBlockId: number;
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

    teachers: number[];
    classes?: number[];
    enroledStudents?: number[];
}

export function dtoToBlock(dto: BlockDto): Block {
    return {
        id: dto.id,
        name: dto.name,
        numberOfClasses: dto.numberOfClasses,
        classCapacity: dto.classCapacity,
        startDate: dto.startDate,
        endDate: dto.endDate,
        isInviteOnly: dto.isInviteOnly,
        minutesPerClass: dto.minutesPerClass,
        teachers: toIdArray(dto.teachers),
        classes: toIdArray(dto.classes),
        enroledStudents: toIdArray(dto.enroledStudents)
    };
}

export function dtosToBlocks(dtos: BlockDto[]): Block[] {
    return dtos.map(dtoToBlock);
}

export function blockToDto(block: Block): BlockDto {
    return {
        id: block.id,
        name: block.name,
        numberOfClasses: block.numberOfClasses,
        classCapacity: block.classCapacity,
        startDate: block.startDate,
        endDate: block.endDate,
        isInviteOnly: block.isInviteOnly,
        minutesPerClass: block.minutesPerClass,
        // teachers: block.teachers.map(id => ({id})) as TeacherDto[]
        teachers: []
    };
}
