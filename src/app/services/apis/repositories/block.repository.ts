import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BlockDto } from '../dtos';

@Injectable()
export class BlockRepository {
    constructor(private _http: Http) {}

    public getForEnrolment(): Observable<BlockDto[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/blocks/for-enrolment')
            .map(response => response.json());
    }
}
