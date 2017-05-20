import { UpcomingClass } from './upcoming-schedule.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UpcomingScheduleRepository {
    constructor(private _http: Http) {}

    public get(): Observable<UpcomingClass[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/users/current/schedules')
            .map(response => response.json());
    }
}
