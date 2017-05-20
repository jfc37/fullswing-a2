import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EnrolmentRepository {
    constructor(private _http: Http) {}

    public enrol(id: number): Observable<any> {
        return this._http.post('https://api-speedydonkey.azurewebsites.net/api/users/current/enrolment', { blockIds: [ id ] });
    }
}
