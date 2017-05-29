import { toIdArray } from '../../../common/util/array.util';
import { ClassDto } from '../../apis/dtos/class.dto';

export interface ClassesState {
    isLoading: boolean;
    errors: string[];

    classes: Class[];
}

export interface Class {
    id: number;
    name: string;
    startTime: Date;
    endTime: Date;
    classCapacity: number;

    blockId: number;
    actualStudents: number[];
    registeredStudents: number[];
    teachers: number[];
}

export function dtoToClass(dto: ClassDto): Class {
    return {
        id: dto.id,
        name: dto.name,
        startTime: dto.startTime,
        endTime: dto.endTime,
        classCapacity: dto.classCapacity,
        blockId: dto.block.id,
        actualStudents: toIdArray(dto.actualStudents),
        registeredStudents: toIdArray(dto.registeredStudents),
        teachers: toIdArray(dto.teachers)
    };
}

export function dtosToClasses(dtos: ClassDto[]): Class[] {
    return dtos.map(dtoToClass);
}
