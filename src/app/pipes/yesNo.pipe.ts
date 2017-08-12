import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'fsYesNo'
})
export class YesNoPipe implements PipeTransform {
    public transform(value: boolean): string {
        return value ? 'Yes' : 'No';
    }
}
