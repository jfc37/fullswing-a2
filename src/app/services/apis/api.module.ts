import { NgModule } from '@angular/core';
import * as repositories from './repositories';
import { Http } from '@angular/http';
import { HttpDecorator } from './http-decorator';

@NgModule({
    providers: [
        { provide: Http, useClass: HttpDecorator },
        repositories.PassRepository,
        repositories.ScheduleRepository,
        repositories.BlockRepository,
        repositories.EnrolmentRepository,
        repositories.ClassRepository,
        repositories.TeacherRepository,
    ],
})
export class ApiModule { }
