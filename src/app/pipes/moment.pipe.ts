import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'fsMoment'
})
export class MonentPipe implements PipeTransform {
    public transform(value: Date, format: string): string {
        if (!format) {
            throw new Error(`Moment pipe requires format to be provided`);
        }

        if (!moment(value).isValid) {
            throw new Error(`Moment pipe was used with non date: ${value}`);
        }

        return moment(value).format(format);
    }
}
