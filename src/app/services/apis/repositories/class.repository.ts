import { ClassDto } from '../dtos/class.dto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClassRepository {
    constructor(private _http: Http) {}

    public getForBlock(blockId: number): Observable<ClassDto[]> {
        return this._http.get(`https://api-speedydonkey.azurewebsites.net/api/blocks/${blockId}/classes`)
            .map(response => response.json());
    }
}
