import { BlockDto } from '../dtos/block.dto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BlockEnrolmentDto } from '../dtos';

@Injectable()
export class BlockRepository {
    constructor(private _http: Http) {}

    public getForEnrolment(): Observable<BlockEnrolmentDto[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/blocks/for-enrolment')
            .map(response => response.json());
    }

    public getAll(): Observable<BlockDto[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/blocks')
            .map(response => response.json());
    }

    public get(id: number): Observable<BlockDto> {
        return this._http.get(`https://api-speedydonkey.azurewebsites.net/api/blocks/${id}`)
            .map(response => response.json());
    }

    public update(block: BlockDto): Observable<BlockDto> {
        return this._http.put(`https://api-speedydonkey.azurewebsites.net/api/blocks/${block.id}`, block)
            .map(response => response.json());
    }
}
