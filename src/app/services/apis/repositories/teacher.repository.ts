import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TeacherDto } from '../dtos';

@Injectable()
export class TeacherRepository {
    constructor(private _http: Http) {}

    public getAll(): Observable<TeacherDto[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/teachers')
            .map(response => response.json());
    }
}
