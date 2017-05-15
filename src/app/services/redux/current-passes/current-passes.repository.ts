import { CurrentPass } from './current-passes-state.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrentPassesRepository {
    constructor(private _http: Http) {}

    public get(): Observable<CurrentPass[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/users/current/passes')
            .map(response => response.json())
            .map(dtos => dtos.map(dto => ({
                name: dto.description,
                remainingClips: dto.clipsRemaining,
                expiryDate: dto.endDate
            })));
    }
}
