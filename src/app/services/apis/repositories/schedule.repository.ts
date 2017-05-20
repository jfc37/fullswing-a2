import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ScheduledClassDto } from '../dtos';

@Injectable()
export class ScheduleRepository {
    constructor(private _http: Http) {}

    public get(): Observable<ScheduledClassDto[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/users/current/schedules')
            .map(response => response.json());
    }
}
