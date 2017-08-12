import { TeacherDto } from '../../apis/dtos';

export interface TeachersState {
    isLoading: boolean;
    errors: string[];

    teachers: Teacher[];
}

export interface Teacher {
    id: number;
    firstName: string;
    surname: string;
    fullName: string;
}

export function dtoToTeacher(dto: TeacherDto): Teacher {
    return {
        id: dto.id,
        firstName: dto.firstName,
        fullName: dto.fullName,
        surname: dto.surname
    };
}

export function dtosToTeachers(dtos: TeacherDto[]): Teacher[] {
    return dtos.map(dtoToTeacher);
}
