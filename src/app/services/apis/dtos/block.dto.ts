import { TeacherDto } from './';

export interface BlockDto {
    announcements: string;
    classCapacity: number;
    classes: any[];
    endDate: Date;
    enroledStudents: any;
    id: number;
    isAlreadyRegistered: boolean;
    isInviteOnly: boolean;
    minutesPerClass: number;
    name: string;
    numberOfClasses: number;
    room: any;
    spacesAvailable: number;
    startDate: Date;
    teachers: TeacherDto[];
}
