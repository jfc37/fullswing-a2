import { BlockDto } from '../../apis/dtos/block.dto';
import { BlockForEnrolment } from './blocks-for-enrolment.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BlocksForEnrolmentRepository {
    constructor(private _http: Http) {}

    public get(): Observable<BlockForEnrolment[]> {
        return this._http.get('https://api-speedydonkey.azurewebsites.net/api/blocks/for-enrolment')
            .map(response => response.json() as BlockDto[])
            .map(dtos => dtos.map(dto => ({
                id: dto.id,
                isEnroled: dto.isAlreadyRegistered,
                minutesPerClass: dto.minutesPerClass,
                name: dto.name,
                spacesAvailable: dto.spacesAvailable,
                startDate: dto.startDate
            } as BlockForEnrolment)));
    }

    public enrol(id: number): Observable<any> {
        return this._http.post('https://api-speedydonkey.azurewebsites.net/api/users/current/enrolment', { blockIds: [ id ] });
    }
}
