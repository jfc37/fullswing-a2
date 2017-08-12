import { TeacherDto, BlockEnrolmentDto } from './';

export interface ScheduledClassDto {
    actualStudents: any[];
    block: BlockEnrolmentDto;
    classCapacity: number;
    endTime: Date;
    id: number;
    name: string;
    passStatistics: any;
    registeredStudents: any[];
    room: any;
    startTime: Date;
    teachers: TeacherDto[];
}
