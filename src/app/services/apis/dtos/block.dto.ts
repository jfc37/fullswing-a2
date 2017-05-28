import { ClassDto } from './class.dto';
import { TeacherDto } from './teacher.dto';

export interface BlockDto {
    announcements: any;
    classCapacity: number;
    classes: ClassDto[];
    endDate: Date;
    enroledStudents: any[];
    id: number;
    isInviteOnly: boolean;
    minutesPerClass: number;
    name: string;
    numberOfClasses: number;
    room: any;
    startDate: Date;
    teachers: TeacherDto[];
}
