import { BlockRowModel } from './block-table.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fs-block-table',
    template: `
        <table>
            <thead>
                <th>Name</th>
                <th>Between</th>
                <th>Day</th>
                <th>Time</th>
            </thead>
            <tbody>
                <tr *ngFor="let row of rows">
                    <td>
                        <a [routerLink]="'/blocks/' + row.id">
                            {{row.name}}
                        </a>
                    </td>
                    <td>{{row.startDate | fsMoment:'DD MMM'}} - {{row.endDate | fsMoment:'DD MMM'}}</td>
                    <td>{{row.startDate | fsMoment:'dddd'}}</td>
                    <td>{{row.startDate | fsMoment:'h:mm a'}}</td>
                </tr>
            </tbody>
        </table>
    `
})
export class BlockTableComponent {
    @Input() public rows: BlockRowModel[];
}
