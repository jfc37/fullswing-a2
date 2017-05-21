import { PassDto } from '../dtos/pass.dto';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PassRepository {
    constructor(private _http: Http) {}

    public getCurrentPasses(): Observable<PassDto[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/users/current/passes')
            .map(response => response.json());
    }
}
